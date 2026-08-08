export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  demoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  highlight?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  whatsapp?: string;
}

export const portfolioData = {
  personal: {
    name: "Dimas Chandra Winata",
    title: "Fullstack Developer",
    education: "Teknologi Informasi, Universitas Muhammadiyah Yogyakarta (UMY)",
    tagline: "Membangun produk digital dari nol — untuk bisnis dan untuk pengguna",
    bio: "Fresh graduate Teknologi Informasi UMY dengan ketertarikan mendalam pada rekayasa perangkat lunak modern. Selain mendalami sisi teknis pengembangan fullstack (Next.js, Laravel), saya juga aktif menjalankan Penmot Dev, usaha web development independen yang berfokus membantu digitalisasi operasional bisnis skala UMKM hingga korporat.",
    status: "Available for opportunities",
  },
  projects: [
    {
      id: "netjes-laundry",
      title: "SIM Netjes Laundry",
      subtitle: "Tugas Akhir Sistem Informasi Manajemen",
      description: "Sistem manajemen operasional laundry terintegrasi yang memfasilitasi pelacakan status pesanan secara real-time, sistem pembayaran instan, notifikasi otomatis, dan scan QR Code untuk optimalisasi pelayanan pelanggan.",
      tech: ["Next.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "WhatsApp Gateway", "QR Code"],
      highlights: [
        "Skor UAT mencapai 98.20%",
        "100% lolos verifikasi fungsionalitas via Black Box Testing"
      ],
      metrics: [
        { label: "Skor UAT", value: "98.20%" },
        { label: "Black Box", value: "100% Pass" }
      ],
      image: "/projects/netjes-laundry-v2.png",
      demoLink: "https://netjes-laundry-lhw7j651w-dimascws-projects.vercel.app/"
    },
    {
      id: "gps-attendance",
      title: "Website Presensi Berbasis GPS",
      subtitle: "Proyek Klien Wahana Belajar (Kampung Inggris Jogja)",
      description: "Aplikasi web pencatatan kehadiran presisi berbasis geolokasi GPS yang memvalidasi lokasi real-time pengguna saat melakukan absen masuk dan pulang.",
      tech: ["Laravel", "MySQL", "Geolocator API", "Bootstrap"],
      highlights: [
        "Menggantikan 100% pencatatan absensi kertas manual ke digital",
        "Validasi koordinat radius aman untuk meminimalkan kecurangan lokasi"
      ],
      metrics: [
        { label: "Efisiensi", value: "+100%" },
        { label: "Metode", value: "Real-time GPS" }
      ],
      image: "/projects/gps-attendance-v2.png",
      demoLink: ""
    },
    {
      id: "penmot-dev",
      title: "Penmot Dev Agency Portal",
      subtitle: "Independent Web Development Studio",
      description: "Usaha pengembangan website kustom yang saya dirikan untuk melayani transformasi digital bisnis kecil-menengah. Menangani seluruh siklus proyek secara mandiri.",
      tech: ["Next.js", "Tailwind CSS", "Laravel", "Figma", "VPS Hosting"],
      highlights: [
        "Berhasil melayani dan menyelesaikan proyek untuk 15 klien bisnis",
        "Mengelola end-to-end dari akuisisi klien, negosiasi, desain UI/UX hingga deployment server"
      ],
      metrics: [
        { label: "Klien Aktif", value: "15 Klien" },
        { label: "Siklus Kerja", value: "End-to-End" }
      ],
      image: "/projects/penmot-dev-v2.png",
      demoLink: "https://penmot.dev"
    },
    {
      id: "umy-card",
      title: "Sistem Kartu Nama & CV Digital UMY",
      subtitle: "Proyek Magang Direktorat Digital dan Informasi UMY",
      description: "Sistem pembuatan kartu nama digital interaktif dan pengisian CV otomatis terintegrasi. Dilengkapi dengan live preview editor visual untuk mengubah template, warna brand, data pegawai (NIP/NIDN/NUPTK), serta pembagian kartu instan berbasis dinamis QR Code.",
      tech: ["Next.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "QR Code Engine", "PDF Generator"],
      highlights: [
        "Merancang editor pembuatan kartu kustom dengan pratinjau live preview waktu-nyata",
        "Integrasi basis data civitas akademika UMY untuk pengisian data kartu secara otomatis"
      ],
      metrics: [
        { label: "Fitur", value: "Live Preview" },
        { label: "Metode", value: "QR & Auto-CV" }
      ],
      image: "/projects/umy-digital-card.png",
      demoLink: ""
    }
  ] as Project[],
  experience: [
    {
      id: "exp-penmot",
      role: "Founder & Fullstack Developer",
      company: "Penmot Dev",
      period: "2024 – Sekarang",
      description: "Mendirikan dan mengembangkan usaha web development independen. Bertanggung jawab atas akuisisi klien, manajemen proyek, perancangan arsitektur database, pembuatan sistem front-end & back-end, serta deployment pada private VPS.",
      bullets: [
        "Berhasil mendeploy 15 website kustom untuk UMKM dan klien korporat.",
        "Mengimplementasikan integrasi WhatsApp Gateway dan sistem analitik pengunjung."
      ]
    },
    {
      id: "exp-umy",
      role: "Magang Fullstack Developer",
      company: "Direktorat Digital dan Informasi UMY",
      period: "Feb – Mei 2026",
      description: "Berkontribusi dalam tim internal pengembangan sistem digital universitas untuk meningkatkan efisiensi administrasi dosen dan civitas akademika.",
      bullets: [
        "Merancang sistem pembuatan kartu nama digital dan pengisian CV otomatis terintegrasi berbasis QR Code.",
        "Mendukung otomatisasi dokumen administrasi berbasis platform web universitas."
      ]
    },
    {
      id: "exp-wahyu",
      role: "Social Media Specialist",
      company: "Wahyu Alam",
      period: "Jul – Sep 2024",
      description: "Mengembangkan rencana pemasaran digital, menyusun narasi promosi produk digital, dan meningkatkan keterikatan audiens di berbagai saluran media sosial.",
      bullets: [
        "Meningkatkan interaksi profil media sosial dan memfasilitasi lead generation untuk produk yang dipromosikan."
      ]
    }
  ] as Experience[],
  skills: [
    {
      category: "Bahasa Pemrograman",
      items: ["JavaScript", "PHP", "C++", "Kotlin", "Dart"]
    },
    {
      category: "Framework / Library",
      items: ["Next.js", "React.js", "Laravel", "Express", "Flutter", "Tailwind CSS", "Shadcn"]
    },
    {
      category: "Database & ORM",
      items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma ORM"]
    },
    {
      category: "Tools & API",
      items: ["Git", "GitHub", "Docker", "Figma", "Cursor", "WhatsApp Gateway API"]
    },
    {
      category: "Bisnis & Manajemen",
      items: ["Client Acquisition", "Negotiation", "Lead Generation", "Business Development"]
    }
  ] as SkillGroup[],
  certifications: [
    {
      id: "cert-bnsp",
      title: "Certified Associate Data Scientist (CADS)",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) — Bidang Kecerdasan Buatan",
      year: "2026",
      image: "/certificates/cads-bnsp-v2.jpg",
      highlight: "Sertifikasi Kompetensi AI Nasional"
    },
    {
      id: "cert-alibaba",
      title: "Alibaba Cloud Certified Developer",
      issuer: "Alibaba Cloud",
      year: "2024",
      image: "/certificates/alibaba-cloud-v2.png",
      highlight: "Sertifikasi keahlian cloud & arsitektur aplikasi terdistribusi"
    },
    {
      id: "cert-kmm-smart-city",
      title: "Medali Perak PKMM 2024 — Smart City SPBE",
      issuer: "Asosiasi Sains & Teknologi Perguruan Tinggi Muhammadiyah 'Aisyiyah (AST-PTMA)",
      year: "2024",
      image: "/certificates/kmm-smart-city.jpg",
      highlight: "Aplikasi Otomatisasi Pembuatan Master Plan Smart City Berbasis SPBE (Karsa Cipta)"
    },
    {
      id: "cert-kmm-aksara-jawa",
      title: "Medali Perak PKMM 2024 — Game Aksara Jawa",
      issuer: "Asosiasi Sains & Teknologi Perguruan Tinggi Muhammadiyah 'Aisyiyah (AST-PTMA)",
      year: "2024",
      image: "/certificates/kmm-aksara-jawa.jpg",
      highlight: "Aplikasi Pembelajaran Bahasa & Aksara Jawa Berbasis Game (Karsa Cipta)"
    },
    {
      id: "cert-react-js",
      title: "React Js Web Frontend Bootcamp",
      issuer: "Sanbercode",
      year: "2024",
      image: "/certificates/react-sanbercode.png",
      highlight: "Pengembangan antarmuka web modern dengan React JS"
    },
    {
      id: "cert-nextjs",
      title: "Next JS Web Developer Bootcamp",
      issuer: "Sanbercode",
      year: "2024",
      image: "/certificates/next-sanbercode.png",
      highlight: "Pengembangan aplikasi web backend & frontend dengan Next JS"
    },
    {
      id: "cert-laravel",
      title: "Toko Online Laravel Livewire & Payment Gateway",
      issuer: "Codepolitan",
      year: "2024",
      image: "/certificates/laravel-livewire-v2.png",
      highlight: "Pembangunan e-commerce interaktif dengan Laravel Livewire & Midtrans"
    },
    {
      id: "cert-business",
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      year: "2024",
      image: "/certificates/business-analysis-v2.png",
      highlight: "Metodologi analisis proses bisnis dan manajemen proyek"
    }
  ] as Certification[],
  contact: {
    email: "cdimas292@gmail.com",
    github: "github.com/DimasCW",
    linkedin: "linkedin.com/in/dimas-chandra-winata-softwaredev"
  } as ContactInfo
};

