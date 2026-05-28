"use client";

import { CheckCircle2, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/siteConfig";
import type { SiteContent } from "@/lib/i18n";

type AboutProps = {
  content: SiteContent;
};

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-[410px]"
        >
          <div className="rounded-[2rem] border border-line bg-soft-gray p-3 shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src={siteConfig.profileImage}
                alt={content.hero.imageAlt}
                fill
                sizes="(max-width: 768px) 88vw, 410px"
                className="object-cover object-[50%_16%]"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-gold/25 bg-white p-4 shadow-card">
            <p className="font-heading text-sm font-bold text-navy">
              {siteConfig.headline}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <SectionHeader
            eyebrow={content.about.section.eyebrow}
            title={content.about.section.title}
            description={content.about.section.description}
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-muted">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-8 rounded-[1.5rem] border border-gold/25 bg-[#FFFBF0] p-5 shadow-card">
            <Quote className="mb-3 text-gold" size={26} />
            <p className="font-heading text-lg font-semibold leading-8 text-navy">
              {content.about.quote}
            </p>
          </blockquote>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.about.highlights.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-line bg-white p-4 text-sm font-semibold text-navy shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
