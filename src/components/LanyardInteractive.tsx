"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import { Physics, RigidBody, useSphericalJoint } from "@react-three/rapier";
import * as THREE from "three";
import { portfolioData } from "../data/portfolioData";
import LanyardStatic from "./LanyardStatic";

// Scene Light, Camera, and Physics setup
function LanyardScene({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const anchorRef = useRef<any>(null);
  const cardRef = useRef<any>(null);
  const cardVisualRef = useRef<any>(null);
  const ropeRef = useRef<any>(null);
  const htmlGroupRef = useRef<THREE.Group>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [flipped, setFlipped] = useState(false);
  
  // Track pointer positions to differentiate between drag and click
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragPlane = useRef(new THREE.Plane());

  const { camera, raycaster, size } = useThree();
  const intersection = new THREE.Vector3();

  // Create spherical joint between fixed anchor and card
  // Anchor position: [0, 2.7, 0], Card initially: [0, -1.0, 0]
  // Local joint offsets align them with a length of 2.3 units
  // Double joint connection (creates a virtual hinge axis on X to prevent Y/Z tumbling)
  // local Y offset is 3.2 to let the card hang down by 3.2 units from the anchor (equilibrium at card Y = -0.5)
  useSphericalJoint(anchorRef, cardRef, [
    [-0.2, 0, 0],   // left joint on anchor center
    [-0.2, 3.2, 0], // left joint on card (hanging offset)
  ]);
  useSphericalJoint(anchorRef, cardRef, [
    [0.2, 0, 0],    // right joint on anchor center
    [0.2, 3.2, 0],  // right joint on card (hanging offset)
  ]);

  // Pointer dragging handlers
  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };

    // Capture the pointer focus
    const target = e.target as HTMLElement;
    if (target.setPointerCapture) {
      target.setPointerCapture(e.pointerId);
    }

    // Switch card body type to Kinematic (position-based) while dragging
    if (cardRef.current) {
      cardRef.current.setBodyType(2); // 2 = KinematicPositionBased
      
      // Define a plane facing Z at the card's current depth
      const currentPos = cardRef.current.translation();
      dragPlane.current.setFromNormalAndCoplanarPoint(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(currentPos.x, currentPos.y, currentPos.z)
      );
    }
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging || !cardRef.current) return;
    e.stopPropagation();

    // R3F automatically normalizes mouse coordinates relative to the canvas in e.pointer
    raycaster.setFromCamera(e.pointer, camera);
    raycaster.ray.intersectPlane(dragPlane.current, intersection);

    // Apply translation constraint (keep card inside viewport borders)
    const constrainedX = THREE.MathUtils.clamp(intersection.x, -3, 3);
    const constrainedY = THREE.MathUtils.clamp(intersection.y, -3, 1.0);

    cardRef.current.setNextKinematicTranslation({
      x: constrainedX,
      y: constrainedY,
      z: 0 // constrain to front plane
    });
  };

  const handlePointerUp = (e: any) => {
    if (!isDragging) return;
    e.stopPropagation();
    setIsDragging(false);

    const target = e.target as HTMLElement;
    if (target.releasePointerCapture) {
      target.releasePointerCapture(e.pointerId);
    }

    // Restore body to Dynamic state to allow swing physics
    if (cardRef.current) {
      cardRef.current.setBodyType(0); // 0 = Dynamic
      
      // Apply subtle dynamic force on release based on cursor distance
      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;
      
      cardRef.current.applyImpulse(
        { x: deltaX * 0.02, y: -deltaY * 0.02, z: 0 },
        true
      );
    }

    // If mouse moved less than 5px, it counts as a click/tap, toggle flip!
    const dist = Math.sqrt(
      Math.pow(e.clientX - dragStartPos.current.x, 2) +
      Math.pow(e.clientY - dragStartPos.current.y, 2)
    );
    if (dist < 6) {
      setFlipped(!flipped);
    }
  };

  // Interpolate card flipping rotation and render lanyard cord string dynamically
  const flipRot = useRef(0);
  useFrame((state, delta) => {
    const timeDelta = Math.min(delta, 0.1); // clamp to avoid giant jumps
    
    // Smooth flip interpolation
    const targetY = flipped ? Math.PI : 0;
    flipRot.current = THREE.MathUtils.lerp(flipRot.current, targetY, 8 * timeDelta);
    if (cardVisualRef.current) {
      cardVisualRef.current.rotation.y = flipRot.current;
    }

    // Set sibling visual group to follow physics body exactly (bypasses Rapier scaling drift)
    if (htmlGroupRef.current && cardRef.current) {
      const pos = cardRef.current.translation();
      const rot = cardRef.current.rotation();
      htmlGroupRef.current.position.set(pos.x, pos.y, pos.z);
      htmlGroupRef.current.quaternion.set(rot.x, rot.y, rot.z, rot.w);
    }

    // Render elastic Bezier lanyard strap
    if (ropeRef.current && cardRef.current) {
      const cardPos = cardRef.current.translation();
      const cardRot = cardRef.current.rotation(); // Quaternion
      
      // Calculate top slot joint position in world space
      const offset = new THREE.Vector3(0, 1.5, 0).applyQuaternion(
        new THREE.Quaternion(cardRot.x, cardRot.y, cardRot.z, cardRot.w)
      );
      const ropeEnd = new THREE.Vector3(cardPos.x, cardPos.y, cardPos.z).add(offset);
      const ropeStart = new THREE.Vector3(0, 2.7, 0); // Anchor world position

      // Middle control point sags downwards
      const midPoint = new THREE.Vector3().addVectors(ropeStart, ropeEnd).multiplyScalar(0.5);
      
      // Add gravity-sag factor depending on distance
      const dist = ropeStart.distanceTo(ropeEnd);
      const maxSag = 0.55;
      midPoint.y -= Math.max(0.1, maxSag - dist * 0.1);

            const curve = new THREE.QuadraticBezierCurve3(ropeStart, midPoint, ropeEnd);
      const points = curve.getPoints(24);
      if (ropeRef.current && ropeRef.current.geometry) {
        const flatPoints = points.flatMap((p) => [p.x, p.y, p.z]);
        ropeRef.current.geometry.setPositions(flatPoints);
        ropeRef.current.computeLineDistances();
      }
    }
  });

  return (
    <>
      {/* 1. Fixed Anchor Point */}
      <RigidBody ref={anchorRef} type="fixed" position={[0, 2.7, 0]}>
        <mesh>
          <torusGeometry args={[0.15, 0.03, 8, 24]} />
          <meshStandardMaterial color="#5B616E" metalness={0.7} roughness={0.3} />
        </mesh>
      </RigidBody>

      {/* 2. Physics-Simulated ID Card (Physics and Colliders Only) */}
      <RigidBody 
        ref={cardRef} 
        type="dynamic" 
        position={[0, -0.5, 0]}
        linearDamping={1.2}
        angularDamping={3.0} // Increased damping to quickly settle back to front-facing position
        colliders="cuboid"
      >
        {/* Invisible dummy mesh to define physics collider shape */}
        <mesh visible={false}>
          <boxGeometry args={[1.9, 2.85, 0.04]} />
        </mesh>
      </RigidBody>

      {/* Sibling Visual Group (bypasses Rapier matrix scaling drift) */}
      <group ref={htmlGroupRef}>
        {/* Card Visual Mesh & HTML overlay */}
        <group ref={cardVisualRef}>
          {/* Card Backing Mesh */}
          <mesh castShadow>
            <boxGeometry args={[1.9, 2.85, 0.04]} />
            <meshStandardMaterial color="#E4E4E0" roughness={0.6} />
          </mesh>

          {/* FRONT SIDE (CSS 3D HTML inside WebGL) */}
          <Html
            transform
            scale={0.009}
            position={[0, 0, 0.022]}
            style={{ backfaceVisibility: "hidden", pointerEvents: isDragging ? "none" : "auto" }}
          >
            <div 
              style={{ width: 224, height: 340 }}
              className="rounded-xl border border-divider/60 bg-[#FAFAF9] p-5 flex flex-col justify-between select-none relative overflow-hidden shadow-xs"
            >
              {/* Strap clip slot */}
              <div className="w-8 h-2 bg-primary-dark rounded-full mx-auto" />
              
              {/* Header */}
              <div className="flex items-center justify-between mt-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-forest-green font-bold">
                  Penmot Dev
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-green"></span>
                </span>
              </div>

              {/* Avatar & Profile */}
              <div className="flex flex-col items-center gap-3 my-auto">
                <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center text-[#FAFAF9] text-xl font-serif font-semibold shadow-xs select-none">
                  D
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-base font-normal text-primary-dark tracking-tight leading-snug">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-secondary-gray mt-1">
                    Fullstack Developer
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between pt-3 border-t border-divider select-none">
                <div className="flex flex-col">
                  <span className="font-mono text-[7px] lowercase text-secondary-gray">id.no</span>
                  <span className="font-mono text-[9px] font-medium text-primary-dark">292-dcw-2026</span>
                </div>
                
                {/* Styled QR Code */}
                <div className="w-10 h-10 border border-divider p-0.5 bg-white flex items-center justify-center rounded-xs">
                  <svg className="w-full h-full text-primary-dark" viewBox="0 0 100 100">
                    <path fill="currentColor" d="M10,10h30v30h-30z M20,20h10v10h-10z M60,10h30v30h-30z M70,20h10v10h-10z M10,60h30v30h-30z M20,70h10v10h-10z M60,60h10v10h-10z M80,60h10v10h-10z M70,70h10v10h-10z M60,80h20v10h-20z M80,80h10v10h-10z" />
                  </svg>
                </div>
              </div>
            </div>
          </Html>

          {/* BACK SIDE */}
          <Html
            transform
            scale={0.009}
            position={[0, 0, -0.022]}
            rotation={[0, Math.PI, 0]}
            style={{ backfaceVisibility: "hidden", pointerEvents: isDragging ? "none" : "auto" }}
          >
            <div 
              style={{ width: 224, height: 340 }}
              className="rounded-xl border border-divider/60 bg-[#FAFAF9] p-5 flex flex-col justify-between select-none relative overflow-hidden shadow-xs"
            >
              <div className="w-8 h-2 bg-primary-dark rounded-full mx-auto" />
              
              <div className="flex items-center justify-center mt-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-secondary-gray font-semibold">
                  Hubungi Pengembang
                </span>
              </div>

              {/* Contact links */}
              <div className="flex flex-col gap-4 my-auto font-sans text-xs">
                <div className="border-b border-divider pb-2">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">email</span>
                  <a 
                    href={`mailto:${portfolioData.contact.email}`} 
                    className="text-primary-dark hover:text-forest-green transition-colors font-medium break-all"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
                <div className="border-b border-divider pb-2">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">github</span>
                  <a 
                    href={`https://${portfolioData.contact.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-dark hover:text-forest-green transition-colors font-medium"
                  >
                    {portfolioData.contact.github}
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray block mb-1">linkedin</span>
                  <a 
                    href={`https://${portfolioData.contact.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-dark hover:text-forest-green transition-colors font-medium leading-relaxed"
                  >
                    dimas-chandra-winata
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center pt-3 border-t border-divider">
                <span className="font-mono text-[8px] lowercase tracking-wider text-secondary-gray">
                  penmot.dev • yogyakarta
                </span>
              </div>
            </div>
          </Html>

          {/* Invisible drag-capture overlay box to receive raycasts cleanly */}
          <mesh
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <boxGeometry args={[2.0, 2.9, 0.1]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
          </mesh>
        </group>
      </group>

      {/* 3. Dynamic Strap Ribbon */}
      <Line 
        ref={ropeRef} 
        points={[[0, 2.7, 0], [0, 0, 0]]} 
        color="#2F5D50" 
        lineWidth={3.5} 
      />
    </>
  );
}

// Interactive Lanyard Canvas Wrapper Component
export default function LanyardInteractive({ prefersReducedMotion = false }) {
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check client-side WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(support);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  // Fallback to static card if reduced motion is enabled or WebGL is unsupported
  if (prefersReducedMotion || !hasWebGL) {
    return <LanyardStatic />;
  }

  return (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[500px] flex items-center justify-center max-w-sm mx-auto relative select-none">
      <Suspense fallback={<LanyardStatic />}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 8.5], fov: 32 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent" }}
        >
          {/* Lights */}
          <ambientLight intensity={1.6} />
          <directionalLight 
            position={[4, 8, 4]} 
            intensity={1.8} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-4, 4, -4]} intensity={0.8} />

          {/* Physics Environment */}
          <Physics gravity={[0, -12, 0]}>
            <LanyardScene prefersReducedMotion={prefersReducedMotion} />
          </Physics>
        </Canvas>
      </Suspense>

      {/* Dynamic Flip Tip overlay */}
      <span className="font-mono text-[8px] uppercase tracking-widest text-secondary-gray absolute bottom-0 left-1/2 -translate-x-1/2 opacity-50 select-none pointer-events-none">
        Seret atau Klik kartu
      </span>
    </div>
  );
}
