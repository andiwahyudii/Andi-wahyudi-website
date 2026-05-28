"use client";

import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Handshake,
  MonitorSmartphone,
  Scale,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteContent } from "@/lib/i18n";

const icons = [
  Scale,
  Building2,
  Handshake,
  BriefcaseBusiness,
  ShieldCheck,
  MonitorSmartphone,
  FileText
];

type ExpertiseProps = {
  content: SiteContent;
};

export function Expertise({ content }: ExpertiseProps) {
  return (
    <section id="expertise" className="section-padding bg-soft-gray">
      <div className="container-page">
        <SectionHeader
          eyebrow={content.sections.expertise.eyebrow}
          title={content.sections.expertise.title}
          description={content.sections.expertise.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.expertise.map((item, index) => {
            const Icon = icons[index] ?? BriefcaseBusiness;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-soft-gold shadow-card">
                  <Icon size={23} />
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-ink">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
