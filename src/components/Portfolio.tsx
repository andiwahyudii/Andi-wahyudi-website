"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

type PortfolioProps = {
  content: SiteContent;
};

export function Portfolio({ content }: PortfolioProps) {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow={content.sections.portfolio.eyebrow}
          title={content.sections.portfolio.title}
          description={content.sections.portfolio.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.portfolio.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-card transition hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.category}`}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 360px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/[0.12] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-navy">
                  <ExternalLink size={14} />
                  {item.category}
                </p>
                <h3 className="font-heading text-xl font-bold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
