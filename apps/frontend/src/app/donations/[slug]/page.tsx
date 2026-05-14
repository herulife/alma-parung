'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PublicLayout from '@/components/PublicLayout';
import { Campaign, getCampaigns, resolveDisplayImageUrl } from '@/lib/api';
import {
  buildCampaignDetailHref,
  featuredOpenDonation,
  parseCampaignIdFromSlug,
} from '@/lib/donations';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Heart,
  MessageCircle,
  Target,
} from 'lucide-react';

export default function DonationDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || '';
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(slug !== featuredOpenDonation.slug);

  useEffect(() => {
    if (!slug || slug === featuredOpenDonation.slug) {
      setIsLoading(false);
      return;
    }

    async function fetchCampaignDetail() {
      setIsLoading(true);
      try {
        const data = await getCampaigns({ activeOnly: true });
        setCampaigns(data.filter((item) => item.is_active));
        const campaignId = parseCampaignIdFromSlug(slug);
        const foundCampaign =
          data.find((item) => item.id === campaignId) ??
          data.find((item) => buildCampaignDetailHref(item).endsWith(slug));
        setCampaign(foundCampaign ?? null);
      } catch (error) {
        console.error('Failed to fetch donation detail:', error);
        setCampaign(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCampaignDetail();
  }, [slug]);

  const featuredProgress = featuredOpenDonation.target
    ? Math.min(
        100,
        Math.round((featuredOpenDonation.progressAmount / featuredOpenDonation.target) * 100)
      )
    : 0;

  const relatedCampaigns = useMemo(() => {
    if (slug === featuredOpenDonation.slug) {
      return campaigns.slice(0, 3);
    }

    return campaigns.filter((item) => item.id !== campaign?.id).slice(0, 3);
  }, [campaign?.id, campaigns, slug]);

  if (slug === featuredOpenDonation.slug) {
    return (
      <PublicLayout>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_48%,#dbeafe_100%)] px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
          <div className="relative mx-auto max-w-6xl">
            <Link
              href="/donations"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800"
            >
              <ArrowLeft size={16} />
              Kembali ke daftar donasi
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-sky-700">
                  <Heart size={14} />
                  Open Donasi Unggulan
                </div>
                <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
                  {featuredOpenDonation.title}
                </h1>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                  {featuredOpenDonation.summary}
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-sky-100 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-600">
                      Target
                    </p>
                    <p className="mt-2 text-xl font-black text-slate-900">
                      Rp {featuredOpenDonation.target.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      Kategori
                    </p>
                    <p className="mt-2 text-xl font-black text-slate-900">
                      {featuredOpenDonation.category}
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      Fokus
                    </p>
                    <p className="mt-2 text-xl font-black text-slate-900">
                      {featuredOpenDonation.focus}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={featuredOpenDonation.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-[1rem] bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
                  >
                    <MessageCircle size={16} />
                    Donasi via WhatsApp
                  </a>
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 rounded-[1rem] border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
                  >
                    Kontak Pondok <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_30px_80px_-40px_rgba(59,130,246,0.35)]">
                <div className="relative h-[520px] bg-slate-100">
                  <Image
                    src={featuredOpenDonation.posterImage}
                    alt={featuredOpenDonation.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_90px_-50px_rgba(15,23,42,0.6)]">
                <div className="relative h-[360px]">
                  <Image
                    src={featuredOpenDonation.coverImage}
                    alt="Suasana ruang belajar Al-Maa"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/10 to-transparent" />
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-700">
                  Cerita Donasi
                </p>
                <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {featuredOpenDonation.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-700">
                  Poin Penting
                </p>
                <div className="mt-5 space-y-3">
                  {featuredOpenDonation.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <CheckCircle2 className="mt-0.5 text-sky-500" size={18} />
                      <p className="text-sm leading-7 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-sky-100 text-sky-600">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-600">
                      Progres Donasi
                    </p>
                    <p className="mt-1 text-2xl font-black text-slate-900">
                      {featuredProgress}%
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em]">
                    <span className="text-slate-400">Terkumpul</span>
                    <span className="text-sky-700">
                      Rp {featuredOpenDonation.progressAmount.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-sky-500"
                      style={{ width: `${featuredProgress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-right text-[11px] text-slate-500">
                    Target Rp {featuredOpenDonation.target.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-700">
                  Hubungi Admin Donasi
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Konfirmasi donasi, arahan transfer, dan pertanyaan seputar campaign ini bisa
                  langsung melalui WhatsApp admin pondok.
                </p>
                <a
                  href={featuredOpenDonation.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[1rem] bg-sky-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
                >
                  <MessageCircle size={16} />
                  {featuredOpenDonation.contactLabel}
                </a>
              </div>
            </aside>
          </div>
        </section>
      </PublicLayout>
    );
  }

  if (isLoading) {
    return (
      <PublicLayout>
        <section className="bg-[linear-gradient(to_bottom,_#f8fbff,_#ffffff)] px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl animate-pulse space-y-6">
            <div className="h-6 w-40 rounded-full bg-slate-200" />
            <div className="h-16 w-full max-w-3xl rounded-3xl bg-slate-200" />
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(300px,0.98fr)]">
              <div className="h-[420px] rounded-[2rem] bg-slate-200" />
              <div className="h-[420px] rounded-[2rem] bg-slate-200" />
            </div>
          </div>
        </section>
      </PublicLayout>
    );
  }

  if (!campaign) {
    return (
      <PublicLayout>
        <section className="bg-[linear-gradient(to_bottom,_#f8fbff,_#ffffff)] px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-dashed border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-sky-400">
              <Heart size={28} />
            </div>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
              Halaman donasi tidak ditemukan
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Link yang kamu buka belum tersedia atau campaign-nya sudah tidak aktif lagi.
            </p>
            <Link
              href="/donations"
              className="mt-6 inline-flex items-center gap-2 rounded-[1rem] bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
            >
              Kembali ke daftar donasi <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </PublicLayout>
    );
  }

  const progress =
    campaign.target_amount > 0
      ? Math.min(100, Math.round((campaign.collected_amount / campaign.target_amount) * 100))
      : 0;
  const imageUrl = resolveDisplayImageUrl(campaign.image_url);

  return (
    <PublicLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_48%,#dbeafe_100%)] px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/donations"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800"
          >
            <ArrowLeft size={16} />
            Kembali ke daftar donasi
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-sky-700">
                <Activity size={14} />
                Campaign Donasi Aktif
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
                {campaign.title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                {campaign.description ||
                  'Campaign ini dibuka untuk mendukung kebutuhan pondok. Silakan hubungi admin donasi untuk konfirmasi dan informasi penyaluran.'}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-sky-100 bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-600">
                    Terkumpul
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-900">
                    Rp {campaign.collected_amount.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Target
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-900">
                    Rp {campaign.target_amount.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Progres
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-900">{progress}%</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_30px_80px_-40px_rgba(59,130,246,0.35)]">
              <div className="relative h-[480px] bg-slate-100">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={campaign.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 text-sky-300">
                    <Heart size={72} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-700">
                Ringkasan Program
              </p>
              <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  {campaign.description ||
                    'Program ini dikelola melalui panel donasi pondok dan ditampilkan ke publik agar calon donatur dapat melihat kebutuhan serta progres pengumpulan dana.'}
                </p>
                <p>
                  Jika kamu ingin ikut berkontribusi atau butuh konfirmasi teknis penyaluran,
                  admin donasi pondok siap membantu melalui WhatsApp atau kontak resmi pondok.
                </p>
              </div>
            </div>

            {relatedCampaigns.length > 0 && (
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-700">
                  Campaign Lainnya
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedCampaigns.map((item) => (
                    <Link
                      key={item.id}
                      href={buildCampaignDetailHref(item)}
                      className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-200 hover:bg-white"
                    >
                      <p className="text-sm font-bold leading-6 text-slate-900">{item.title}</p>
                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        Target Rp {item.target_amount.toLocaleString('id-ID')}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-sky-100 text-sky-600">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-600">
                    Progres Campaign
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-900">{progress}%</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em]">
                  <span className="text-slate-400">Terkumpul</span>
                  <span className="text-sky-700">
                    Rp {campaign.collected_amount.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-sky-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-[11px] text-slate-500">
                  Target Rp {campaign.target_amount.toLocaleString('id-ID')}
                </div>
              </div>
              {campaign.end_date && (
                <div className="mt-5 flex items-center gap-2 rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <CalendarDays size={16} className="text-sky-600" />
                  Berakhir {new Date(campaign.end_date).toLocaleDateString('id-ID')}
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-sky-700">
                Donasi Sekarang
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Untuk ikut berpartisipasi, silakan hubungi admin donasi pondok terlebih dahulu agar
                mendapatkan arahan transfer dan konfirmasi campaign yang tepat.
              </p>
              <a
                href={featuredOpenDonation.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[1rem] bg-sky-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
              >
                <MessageCircle size={16} />
                Hubungi Admin Donasi
              </a>
            </div>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
}
