"use client";

import { Gem } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

type ValuesProps = {
  content: SiteContent;
};

export function Values({ content }: ValuesProps) {
  return (
    <section id="values" className="section-padding bg-soft-gray">
      <div className="container-page">
        <SectionHeader
          eyebrow={content.sections.values.eyebrow}
          title={content.sections.values.title}
          description={content.sections.values.description}
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.45, delay: index * 0.025 }}
              className="flex min-h-[112px] flex-col justify-between rounded-[1.25rem] border border-line bg-white p-5 shadow-card"
            >
              <Gem className="text-gold" size={22} />
              <p className="mt-5 font-heading text-base font-bold leading-snug text-navy">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
