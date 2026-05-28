"use client";

import { Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

type CaseStudiesProps = {
  content: SiteContent;
};

export function CaseStudies({ content }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="section-padding bg-soft-gray">
      <div className="container-page">
        <SectionHeader
          eyebrow={content.sections.caseStudies.eyebrow}
          title={content.sections.caseStudies.title}
          description={content.sections.caseStudies.description}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {content.caseStudies.map((item, index) => {
            const blocks = [
              item.challenge,
              item.approach,
              item.solution,
              item.impact
            ];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-line bg-white p-6 shadow-card"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/[0.15] text-navy">
                  <Layers3 size={23} />
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug text-navy">
                  {item.title}
                </h3>
                <div className="mt-6 grid gap-4">
                  {blocks.map((block, blockIndex) => (
                    <div
                      key={content.caseStudyLabels[blockIndex]}
                      className="rounded-2xl border border-line bg-soft-gray p-4"
                    >
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                        {content.caseStudyLabels[blockIndex]}
                      </p>
                      <p className="text-sm leading-7 text-muted">{block}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
