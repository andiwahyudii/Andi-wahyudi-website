"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

type ServicesProps = {
  content: SiteContent;
};

export function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-deep-navy text-white">
      <div className="container-page">
        <SectionHeader
          eyebrow={content.sections.services.eyebrow}
          title={content.sections.services.title}
          description={content.sections.services.description}
          align="center"
          className="[&_h2]:text-white [&_p]:text-white/[0.72]"
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.45, delay: index * 0.015 }}
              className="flex min-h-[88px] gap-3 rounded-2xl border border-white/[0.12] bg-white/[0.07] p-4 backdrop-blur"
            >
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-deep-navy">
                <Check size={15} />
              </span>
              <p className="text-sm font-medium leading-7 text-white/[0.84]">
                {service}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
