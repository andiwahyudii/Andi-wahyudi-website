import { caseStudiesEn } from "./caseStudies";
import { expertiseEn } from "./expertise";
import { portfolioEn } from "./portfolio";
import { processEn } from "./process";
import { servicesEn } from "./services";
import { siteConfig } from "./siteConfig";
import { valuesEn } from "./values";

export const contentEn = {
  locale: "en",
  seo: {
    title: "Andi Wahyudi | Legal, Business, Property & Digital Development Strategist",
    description:
      "Personal website of Andi Wahyudi, a multidisciplinary professional in business law, mining law, corporate governance, property development, cooperatives, aviation security, website development, and digital branding.",
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
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    items: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#expertise" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Contact", href: "#contact" }
    ]
  },
  hero: {
    kicker: "Personal Branding",
    name: siteConfig.name,
    headline: siteConfig.headline,
    subheadline:
      "Helping build projects, businesses, institutions, and digital identities that are legally structured, bankable, professional, and impactful.",
    trust:
      "Focused on legal, business, mining law, property, cooperative, aviation security, and digital development solutions that are strategic, measurable, and trustworthy.",
    badges: [
      "Legal & Business",
      "Mining Law",
      "Property Development",
      "Aviation Security",
      "Digital Branding"
    ],
    ctas: {
      portfolio: "View Portfolio",
      contact: "Contact Me",
      consultation: "Project Consultation"
    },
    imageAlt:
      "Andi Wahyudi - Legal, Business, Property & Digital Development Strategist"
  },
  about: {
    section: {
      eyebrow: "Professional Profile",
      title: "Building projects with strong legal, business, and digital structure.",
      description:
        "A multidisciplinary approach to help projects and companies become more prepared, credible, and trustworthy."
    },
    paragraphs: [
      "Andi Wahyudi is a multidisciplinary professional focused on business development, project legality, corporate governance, mining law, property, cooperatives, aviation security, strategic partnerships, website development, and digital branding.",
      "As a mining law enthusiast, Andi Wahyudi pays close attention to legality, licensing, contracts, compliance, business governance, and legal risks in the mining sector. This perspective strengthens his ability to assess projects not only from a business standpoint, but also through regulation, legal structure, and business sustainability.",
      "He has experience in developing business concepts, legal documents, company profiles, pitch decks, partnership proposals, property marketing strategies, corporate websites, and institutional governance frameworks."
    ],
    quote:
      "Strong legality, precise strategy, and disciplined execution are the foundation of trusted projects.",
    highlights: [
      "Systematic",
      "Solution-oriented",
      "Legal-minded",
      "Business-oriented",
      "Result-driven",
      "Understands law, business, regulation, mining, property, cooperatives, aviation security, and digital technology"
    ],
    identity:
      "Andi Wahyudi is a mining law enthusiast, business development professional, corporate legal practitioner, property development strategist, cooperative development advocate, aviation security business & law observer, and digital branding / website development professional."
  },
  sections: {
    expertise: {
      eyebrow: "Expertise",
      title: "Cross-disciplinary work across legality, business, property, cooperatives, aviation security, and digital.",
      description:
        "Each area is designed to help projects be assessed more completely: legal, feasible, structured, communicative, and ready for follow-up."
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Experience areas structured for real business needs.",
      description:
        "This portfolio presents work directions in project development, documentation, governance, and professional digital identity."
    },
    services: {
      eyebrow: "Services",
      title: "Professional services that can be adapted to project needs.",
      description:
        "From business legal consultation, strategic documents, property development, cooperatives, aviation security, to corporate websites."
    },
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Sample approaches to understanding challenges and building solutions.",
      description:
        "Without fabricated testimonials, this section shows a work approach based on challenge, approach, solution, and realistic impact."
    },
    process: {
      eyebrow: "Process",
      title: "A systematic workflow from needs assessment to ready-to-use results.",
      description:
        "Each stage keeps communication, documentation, and execution clear from the beginning."
    },
    values: {
      eyebrow: "Values",
      title: "Principles that keep work structured, credible, and practical.",
      description:
        "These values guide strategy, documents, presentations, and digital identity development."
    },
    why: {
      eyebrow: "Why Work With Me",
      title: "Reasons to collaborate through a multidisciplinary approach.",
      description:
        "The focus is not only on visuals or documents, but on structures that help projects become more trusted."
    }
  },
  expertise: expertiseEn,
  portfolio: portfolioEn,
  services: servicesEn,
  caseStudies: caseStudiesEn,
  caseStudyLabels: ["Challenge", "Approach", "Solution", "Impact"],
  process: processEn,
  values: valuesEn,
  why: [
    "Understands both legal and business aspects",
    "Able to prepare structured and strategic documents",
    "Thinks from the perspective of legality, feasibility, and partner interests",
    "Understands property, cooperatives, mining law, aviation security, and digital branding",
    "Able to turn ideas into documents, proposals, websites, or professional presentations",
    "Focused on credibility, structure, and practical outcomes"
  ],
  contact: {
    eyebrow: "Contact",
    title: "Let's Build More Structured and Credible Projects",
    text:
      "Open for collaboration, consultation, strategic partnerships, project development, document preparation, corporate website development, and business digital identity strengthening.",
    buttons: {
      whatsapp: "Contact via WhatsApp",
      email: "Send Email"
    },
    form: {
      title: "Project Consultation",
      description:
        "Complete this short form to prepare a clear WhatsApp message ready to send.",
      submit: "Send via WhatsApp",
      fields: {
        name: "Name",
        contact: "Email / WhatsApp",
        purpose: "Purpose",
        message: "Message"
      },
      placeholders: {
        name: "Your name",
        contact: "Email or WhatsApp number",
        purpose: "Example: company profile, legal opinion, corporate website",
        message: "Briefly describe your project needs"
      }
    },
    details: {
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Location"
    }
  },
  floatingWhatsApp: "WhatsApp",
  footer: {
    copyright: "© 2026 Andi Wahyudi. All rights reserved."
  }
} as const;
