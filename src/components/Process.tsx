"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

type ProcessProps = {
  content: SiteContent;
};

export function Process({ content }: ProcessProps) {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow={content.sections.process.eyebrow}
          title={content.sections.process.title}
          description={content.sections.process.description}
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {content.process.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="relative rounded-[1.25rem] border border-line bg-white p-5 shadow-card"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-soft-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
