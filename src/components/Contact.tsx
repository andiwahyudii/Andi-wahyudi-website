"use client";

import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import type { Locale } from "@/data/types";
import type { SiteContent } from "@/lib/i18n";

type ContactProps = {
  content: SiteContent;
  locale: Locale;
};

type FormState = {
  name: string;
  contact: string;
  purpose: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  contact: "",
  purpose: "",
  message: ""
};

export function Contact({ content, locale }: ContactProps) {
  const [form, setForm] = useState<FormState>(initialForm);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      locale === "id"
        ? [
            "Halo Andi Wahyudi, saya ingin berkonsultasi.",
            `Nama: ${form.name}`,
            `Kontak: ${form.contact}`,
            `Keperluan: ${form.purpose}`,
            `Pesan: ${form.message}`
          ].join("\n")
        : [
            "Hello Andi Wahyudi, I would like to consult.",
            `Name: ${form.name}`,
            `Contact: ${form.contact}`,
            `Purpose: ${form.purpose}`,
            `Message: ${form.message}`
          ].join("\n");

    window.open(
      `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noreferrer"
    );
  };

  const location =
    locale === "id" ? siteConfig.locationId : siteConfig.locationEn;

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-deep-navy text-white"
    >
      <div className="absolute inset-0 premium-grid opacity-[0.35]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,21,38,0.96),rgba(11,31,58,0.92),rgba(200,162,74,0.16))]"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[1.75rem] border border-white/[0.12] bg-white/[0.08] p-6 shadow-premium backdrop-blur sm:p-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-soft-gold">
            {content.contact.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            {content.contact.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/[0.76]">
            {content.contact.text}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Button
              href={siteConfig.whatsapp}
              target="_blank"
              icon={<MessageCircle size={18} />}
              className="w-full sm:w-auto"
            >
              {content.contact.buttons.whatsapp}
            </Button>
            <Button
              href={siteConfig.mailto}
              variant="ghost"
              icon={<Mail size={18} />}
              className="w-full sm:w-auto"
            >
              {content.contact.buttons.email}
            </Button>
          </div>

          <div className="mt-9 grid gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:bg-white/10"
            >
              <MessageCircle className="mt-1 text-soft-gold" size={22} />
              <span>
                <span className="block text-sm font-bold text-white">
                  {content.contact.details.whatsapp}
                </span>
                <span className="text-sm text-white/70">{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={siteConfig.mailto}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:bg-white/10"
            >
              <Mail className="mt-1 text-soft-gold" size={22} />
              <span>
                <span className="block text-sm font-bold text-white">
                  {content.contact.details.email}
                </span>
                <span className="text-sm text-white/70">{siteConfig.email}</span>
              </span>
            </a>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <MapPin className="mt-1 text-soft-gold" size={22} />
              <span>
                <span className="block text-sm font-bold text-white">
                  {content.contact.details.location}
                </span>
                <span className="text-sm text-white/70">{location}</span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-white/[0.12] bg-white p-6 text-ink shadow-premium sm:p-8"
        >
          <div className="mb-7">
            <h3 className="font-heading text-2xl font-bold text-navy">
              {content.contact.form.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {content.contact.form.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              {content.contact.form.fields.name}
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder={content.contact.form.placeholders.name}
                className="focus-ring min-h-12 rounded-2xl border border-line bg-soft-gray px-4 text-sm text-ink outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy">
              {content.contact.form.fields.contact}
              <input
                required
                value={form.contact}
                onChange={(event) => updateField("contact", event.target.value)}
                placeholder={content.contact.form.placeholders.contact}
                className="focus-ring min-h-12 rounded-2xl border border-line bg-soft-gray px-4 text-sm text-ink outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy sm:col-span-2">
              {content.contact.form.fields.purpose}
              <input
                required
                value={form.purpose}
                onChange={(event) => updateField("purpose", event.target.value)}
                placeholder={content.contact.form.placeholders.purpose}
                className="focus-ring min-h-12 rounded-2xl border border-line bg-soft-gray px-4 text-sm text-ink outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy sm:col-span-2">
              {content.contact.form.fields.message}
              <textarea
                required
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={content.contact.form.placeholders.message}
                rows={6}
                className="focus-ring min-h-36 resize-y rounded-2xl border border-line bg-soft-gray px-4 py-3 text-sm leading-7 text-ink outline-none"
              />
            </label>
          </div>

          <Button type="submit" icon={<Send size={18} />} className="mt-6 w-full">
            {content.contact.form.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
