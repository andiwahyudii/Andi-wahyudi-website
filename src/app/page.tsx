"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import type { Locale } from "@/data/types";
import { getContent } from "@/lib/i18n";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("id");
  const content = getContent(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <Navbar content={content} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Expertise content={content} />
        <Portfolio content={content} />
        <Services content={content} />
        <CaseStudies content={content} />
        <Process content={content} />
        <Values content={content} />
        <WhyWorkWithMe content={content} />
        <Contact content={content} locale={locale} />
      </main>
      <Footer content={content} />
      <FloatingWhatsApp label={content.floatingWhatsApp} />
    </>
  );
}
