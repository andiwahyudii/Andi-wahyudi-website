import { caseStudiesId } from "./caseStudies";
import { expertiseId } from "./expertise";
import { portfolioId } from "./portfolio";
import { processId } from "./process";
import { servicesId } from "./services";
import { siteConfig } from "./siteConfig";
import { valuesId } from "./values";

export const contentId = {
  locale: "id",
  seo: {
    title: "Andi Wahyudi | Legal, Business, Property & Digital Development Strategist",
    description:
      "Website pribadi Andi Wahyudi, profesional multidisiplin di bidang hukum bisnis, hukum pertambangan, tata kelola perusahaan, pengembangan properti, koperasi, aviation security, website development, dan digital branding.",
    keywords: [
      "Andi Wahyudi",
      "Andi Wahyudi hukum pertambangan",
      "Pegiat hukum pertambangan",
      "Mining law Indonesia",
      "Legal business strategist",
      "Konsultan hukum bisnis",
      "Property development",
      "Pengembangan properti",
      "Perumahan subsidi",
      "Koperasi desa",
      "Aviation security business",
      "Aviation security law",
      "Regulated agent",
      "Cargo security compliance",
      "Website perusahaan",
      "Digital branding",
      "Company profile digital",
      "Kalimantan Barat",
      "West Kalimantan"
    ]
  },
  nav: {
    contactLabel: "Contact",
    openMenuLabel: "Buka menu",
    closeMenuLabel: "Tutup menu",
    items: [
      { label: "Beranda", href: "#home" },
      { label: "Profil", href: "#about" },
      { label: "Keahlian", href: "#expertise" },
      { label: "Portofolio", href: "#portfolio" },
      { label: "Layanan", href: "#services" },
      { label: "Studi Kasus", href: "#case-studies" },
      { label: "Kontak", href: "#contact" }
    ]
  },
  hero: {
    kicker: "Personal Branding",
    name: siteConfig.name,
    headline: siteConfig.headline,
    subheadline:
      "Membantu membangun proyek, bisnis, kelembagaan, dan identitas digital yang legal, terstruktur, bankable, profesional, dan berdampak nyata.",
    trust:
      "Berfokus pada solusi hukum, bisnis, pertambangan, properti, koperasi, aviation security, dan digital development yang strategis, terukur, dan dapat dipercaya.",
    badges: [
      "Legal & Business",
      "Mining Law",
      "Property Development",
      "Aviation Security",
      "Digital Branding"
    ],
    ctas: {
      portfolio: "Lihat Portofolio",
      contact: "Hubungi Saya",
      consultation: "Konsultasi Proyek"
    },
    imageAlt:
      "Andi Wahyudi - Legal, Business, Property & Digital Development Strategist"
  },
  about: {
    section: {
      eyebrow: "Profil Profesional",
      title: "Membangun proyek dengan struktur legal, bisnis, dan digital yang kuat.",
      description:
        "Pendekatan multidisiplin untuk membantu proyek dan perusahaan tampil lebih siap, kredibel, dan mudah dipercaya."
    },
    paragraphs: [
      "Andi Wahyudi adalah profesional multidisiplin yang berfokus pada pengembangan bisnis, legalitas proyek, tata kelola perusahaan, hukum pertambangan, properti, koperasi, aviation security, kemitraan strategis, website development, dan digital branding.",
      "Sebagai pegiat hukum pertambangan, Andi Wahyudi memiliki perhatian pada aspek legalitas, perizinan, kontrak, kepatuhan, tata kelola usaha, dan risiko hukum dalam sektor pertambangan. Pendekatan ini memperkuat kemampuannya dalam membaca proyek tidak hanya dari sisi bisnis, tetapi juga dari sisi regulasi, struktur legal, dan keberlanjutan usaha.",
      "Memiliki pengalaman dalam menyusun konsep bisnis, dokumen legal, company profile, pitch deck, proposal kerja sama, strategi pemasaran properti, pengembangan website perusahaan, serta penguatan kelembagaan berbasis tata kelola yang kuat."
    ],
    quote:
      "Legalitas yang kuat, strategi yang tepat, dan eksekusi yang rapi adalah fondasi utama dalam membangun proyek yang dipercaya.",
    highlights: [
      "Sistematis",
      "Solutif",
      "Legal-minded",
      "Business-oriented",
      "Berorientasi hasil",
      "Memahami hukum, bisnis, regulasi, pertambangan, properti, koperasi, aviation security, dan teknologi digital"
    ],
    identity:
      "Andi Wahyudi adalah pegiat hukum pertambangan, pengembang bisnis, praktisi legal korporasi, pengembang properti, pegiat koperasi, pemerhati aviation security business & law, serta pengembang website dan digital branding perusahaan."
  },
  sections: {
    expertise: {
      eyebrow: "Keahlian",
      title: "Bidang kerja lintas legalitas, bisnis, properti, koperasi, aviation security, dan digital.",
      description:
        "Setiap area dirancang untuk membantu proyek dibaca lebih utuh: legal, layak, rapi, komunikatif, dan siap ditindaklanjuti."
    },
    portfolio: {
      eyebrow: "Portofolio",
      title: "Ruang pengalaman yang tersusun untuk kebutuhan bisnis nyata.",
      description:
        "Portofolio ini menampilkan arah pekerjaan dalam pengembangan proyek, dokumen, tata kelola, dan identitas digital profesional."
    },
    services: {
      eyebrow: "Layanan",
      title: "Layanan profesional yang bisa disesuaikan dengan kebutuhan proyek.",
      description:
        "Mulai dari konsultasi legal bisnis, dokumen strategis, pengembangan properti, koperasi, aviation security, hingga website perusahaan."
    },
    caseStudies: {
      eyebrow: "Studi Kasus",
      title: "Contoh pendekatan dalam membaca tantangan dan menyusun solusi.",
      description:
        "Tanpa testimoni palsu, bagian ini menunjukkan cara kerja berbasis tantangan, pendekatan, solusi, dan dampak yang realistis."
    },
    process: {
      eyebrow: "Cara Kerja",
      title: "Proses kerja yang sistematis dari kebutuhan hingga hasil siap digunakan.",
      description:
        "Setiap tahap menjaga agar komunikasi, dokumen, dan eksekusi tetap jelas sejak awal."
    },
    values: {
      eyebrow: "Nilai Kerja",
      title: "Prinsip yang menjaga pekerjaan tetap rapi, kredibel, dan dapat digunakan.",
      description:
        "Nilai kerja ini menjadi dasar dalam menyusun strategi, dokumen, presentasi, maupun identitas digital."
    },
    why: {
      eyebrow: "Why Work With Me",
      title: "Alasan bekerja sama dengan pendekatan multidisiplin.",
      description:
        "Fokusnya bukan hanya tampilan atau dokumen, tetapi struktur yang membantu proyek lebih dipercaya."
    }
  },
  expertise: expertiseId,
  portfolio: portfolioId,
  services: servicesId,
  caseStudies: caseStudiesId,
  caseStudyLabels: ["Tantangan", "Pendekatan", "Solusi", "Dampak"],
  process: processId,
  values: valuesId,
  why: [
    "Memahami aspek hukum dan bisnis secara bersamaan",
    "Mampu menyusun dokumen yang rapi dan strategis",
    "Terbiasa berpikir dari sisi legalitas, kelayakan, dan kepentingan mitra",
    "Memahami properti, koperasi, hukum pertambangan, aviation security, dan digital branding",
    "Mampu mengubah ide menjadi dokumen, proposal, website, atau presentasi profesional",
    "Fokus pada kredibilitas, struktur, dan hasil yang bisa digunakan"
  ],
  contact: {
    eyebrow: "Kontak",
    title: "Mari Bangun Proyek yang Lebih Terstruktur dan Kredibel",
    text:
      "Terbuka untuk kolaborasi, konsultasi, kemitraan strategis, pengembangan proyek, penyusunan dokumen, pembuatan website perusahaan, dan penguatan identitas digital bisnis.",
    buttons: {
      whatsapp: "Hubungi via WhatsApp",
      email: "Kirim Email"
    },
    form: {
      title: "Konsultasi Proyek",
      description:
        "Isi form singkat ini untuk membuat pesan WhatsApp yang rapi dan siap dikirim.",
      submit: "Kirim via WhatsApp",
      fields: {
        name: "Nama",
        contact: "Email / WhatsApp",
        purpose: "Keperluan",
        message: "Pesan"
      },
      placeholders: {
        name: "Nama Anda",
        contact: "Email atau nomor WhatsApp",
        purpose: "Contoh: company profile, legal opinion, website perusahaan",
        message: "Ceritakan kebutuhan proyek secara singkat"
      }
    },
    details: {
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Lokasi"
    }
  },
  floatingWhatsApp: "WhatsApp",
  footer: {
    copyright: "© 2026 Andi Wahyudi. Seluruh hak cipta dilindungi."
  }
} as const;
