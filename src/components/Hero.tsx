"use client";

import { ArrowRight, BriefcaseBusiness, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import type { SiteContent } from "@/lib/i18n";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-deep-navy pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <div className="absolute inset-0 premium-grid opacity-[0.45]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,21,38,0.94),rgba(11,31,58,0.92)_46%,rgba(200,162,74,0.2))]"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 grid gap-12 pb-20 lg:min-h-[calc(100vh-2rem)] lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-7 flex flex-wrap gap-2">
            {content.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/[0.15] bg-white/[0.08] px-3 py-2 text-xs font-semibold text-white/[0.86] backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-soft-gold">
            <BriefcaseBusiness size={15} />
            {content.hero.kicker}
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {content.hero.name}
          </h1>
          <p className="mt-5 max-w-3xl font-heading text-xl font-semibold leading-snug text-soft-gold sm:text-2xl lg:text-3xl">
            {content.hero.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            {content.hero.subheadline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.66] sm:text-base">
            {content.hero.trust}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Button
              href="#portfolio"
              icon={<ArrowRight size={18} />}
              className="w-full sm:w-auto"
            >
              {content.hero.ctas.portfolio}
            </Button>
            <Button
              href={siteConfig.whatsapp}
              target="_blank"
              variant="ghost"
              icon={<MessageCircle size={18} />}
              className="w-full sm:w-auto"
            >
              {content.hero.ctas.contact}
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              icon={<Mail size={18} />}
              className="w-full sm:w-auto"
            >
              {content.hero.ctas.consultation}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[440px] lg:max-w-[500px]"
        >
          <div className="rounded-[2rem] border border-white/[0.14] bg-white/10 p-3 shadow-premium backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-white">
              <Image
                src={siteConfig.profileImage}
                alt={content.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 88vw, 500px"
                className="object-cover object-[50%_16%]"
              />
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-gold/20 bg-white/10 p-5 text-sm leading-7 text-white/[0.78] backdrop-blur">
            {content.about.identity}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
