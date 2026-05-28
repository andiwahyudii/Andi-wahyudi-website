"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

type WhyWorkWithMeProps = {
  content: SiteContent;
};

export function WhyWorkWithMe({ content }: WhyWorkWithMeProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start">
        <SectionHeader
          eyebrow={content.sections.why.eyebrow}
          title={content.sections.why.title}
          description={content.sections.why.description}
        />

        <div className="grid gap-4">
          {content.why.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="flex gap-4 rounded-[1.25rem] border border-line bg-soft-gray p-5"
            >
              <CheckCircle2 className="mt-1 shrink-0 text-success" size={22} />
              <p className="text-base font-semibold leading-7 text-navy">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
