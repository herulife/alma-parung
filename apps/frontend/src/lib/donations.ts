import type { Campaign } from '@/lib/api';

export type FeaturedDonationDetail = {
  slug: string;
  title: string;
  target: number;
  whatsappUrl: string;
  contactLabel: string;
  posterImage: string;
  coverImage: string;
  summary: string;
  category: string;
  focus: string;
  progressAmount: number;
  points: string[];
  story: string[];
};

export const featuredOpenDonation: FeaturedDonationDetail = {
  slug: 'wakaf-cat-tembok',
  title: 'Wakaf Cat Tembok untuk Ruang Kelas Penghafal Al-Quran',
  target: 15000000,
  whatsappUrl: 'https://wa.me/6281932506078',
  contactLabel: '0819 3250 6078',
  posterImage: '/assets/img/donasi/wakaf-cat-tembok-brosur.jpeg',
  coverImage: '/assets/img/donasi/wakaf-cat-tembok-gedung.jpeg',
  summary:
    'Open donasi baru untuk membantu pengecatan ruang kelas santri agar lebih nyaman, layak, dan penuh semangat belajar.',
  category: 'Wakaf Renovasi Ringan',
  focus: 'Ruang Kelas Penghafal Al-Quran',
  progressAmount: 0,
  points: [
    'Bukan sekadar cat, tapi amal jariyah yang hidup bersama setiap ayat yang dihafal.',
    'Difokuskan untuk ruang kelas para santri penghafal Al-Quran di Pondok Pesantren Al-Maa Parung Bogor.',
    'Target penggalangan dana sebesar Rp 15.000.000.',
  ],
  story: [
    'Bayangkan setiap ayat yang dihafal santri terjadi di ruang kelas yang kamu bantu bangun.',
    'Program ini dibuka agar ruang belajar santri menjadi lebih nyaman, bersih, dan menyenangkan untuk murojaah, belajar diniyah, dan aktivitas harian.',
    'Setiap rupiah yang terkumpul diarahkan untuk pembenahan visual ruang kelas agar semangat belajar para santri ikut tumbuh.',
  ],
};

export function slugifyDonationTitle(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[-\s]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function buildCampaignDetailHref(campaign: Campaign) {
  return `/donations/${slugifyDonationTitle(campaign.title)}-${campaign.id}`;
}

export function parseCampaignIdFromSlug(slug: string) {
  const match = slug.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}
