import type { Metadata } from "next";
import { contentId } from "@/data/content.id";
import { siteConfig } from "@/data/siteConfig";

export function buildMetadata(): Metadata {
  const title = contentId.seo.title;
  const description = contentId.seo.description;
  const ogImage = new URL(siteConfig.ogImage, siteConfig.domain).toString();

  return {
    metadataBase: new URL(siteConfig.domain),
    title,
    description,
    keywords: [...contentId.seo.keywords],
    alternates: {
      canonical: "/"
    },
    openGraph: {
      title,
      description,
      url: siteConfig.domain,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "profile",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.headline}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andi Wahyudi",
    url: siteConfig.domain,
    image: new URL(siteConfig.profileImage, siteConfig.domain).toString(),
    jobTitle: siteConfig.headline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kalimantan Barat",
      addressCountry: "ID"
    },
    knowsAbout: [
      "Business law",
      "Mining law",
      "Corporate governance",
      "Property development",
      "Cooperatives",
      "Aviation security business",
      "Regulated agent",
      "Cargo security compliance",
      "Website development",
      "Digital branding"
    ]
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Andi Wahyudi Professional Services",
    url: siteConfig.domain,
    image: new URL(siteConfig.ogImage, siteConfig.domain).toString(),
    description: contentId.seo.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: ["Indonesia", "West Kalimantan"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kalimantan Barat",
      addressCountry: "ID"
    },
    serviceType: [
      "Business legal consultation",
      "Mining law consultation",
      "Property development strategy",
      "Cooperative governance",
      "Aviation security business and law",
      "Corporate website development",
      "Digital branding"
    ]
  };
}
