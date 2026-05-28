# Andi Wahyudi Personal Website

Website pribadi profesional bilingual untuk menampilkan profil, keahlian, portofolio, layanan, studi kasus, dan kontak Andi Wahyudi.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Responsive Design
- SEO Optimization
- Bilingual Content

## Cara Menjalankan

```bash
npm install
npm run dev
```

Project akan berjalan di `http://localhost:3000`.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deploy

Website siap deploy ke Vercel.

Pengaturan Vercel:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `.next`
- Environment Variables: `NEXT_PUBLIC_SITE_URL=https://andiwahyudi.com`

## Cara Mengganti Data

- Edit `/src/data/siteConfig.ts` untuk nomor, email, lokasi, dan domain
- Edit `/src/data/content.id.ts` untuk teks Bahasa Indonesia
- Edit `/src/data/content.en.ts` untuk teks Bahasa Inggris
- Edit file data tambahan di `/src/data` untuk expertise, portfolio, services, case studies, process, dan values
- Ganti foto di `/public/images/profile/andi-wahyudi.jpg`
- Ganti portfolio images di `/public/images/portfolio`
- Ganti Open Graph image di `/public/images/og/og-image.jpg`
