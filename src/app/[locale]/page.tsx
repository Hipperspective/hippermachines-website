'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import HeroSection from '@/components/HeroSection';
import CategoryCard from '@/components/CategoryCard';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('home');

  const usps = [
    { key: 'noDrying', icon: DropletIcon },
    { key: 'carbide', icon: DiamondIcon },
    { key: 'playable', icon: MusicIcon },
    { key: 'adaptable', icon: SettingsIcon },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* USPs Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] dark:bg-[#1A1816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('usps.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="text-center p-6 rounded-2xl bg-[#F0EDE8] dark:bg-[#252220] hover:bg-[#E8E5E0] dark:hover:bg-[#2A2725] transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t(`usps.${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-body">
                  {t(`usps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 sm:py-24 bg-[#F0EDE8] dark:bg-[#252220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('categoriesTitle')}
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('categoriesSubtitle')}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <CategoryCard
              category="bassoon"
              image="/images/products/aussenhobel-1.jpg"
            />
          </div>
        </div>
      </section>

      {/* Featured Machine Section */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#1A1816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl dark:shadow-none">
              <Image
                src="/images/products/aussenhobel-1.jpg"
                alt="Aussenhobelautomat"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block font-body font-medium text-sm tracking-wide text-primary-600 dark:text-primary-400 mb-3">
                {t('featured.badge')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('featured.title')}
              </h2>
              <p className="font-body text-lg text-gray-600 dark:text-gray-400 mb-6">
                {t('featured.description')}
              </p>
              <ul className="space-y-3 mb-8 font-body">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t('featured.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t('featured.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t('featured.feature3')}</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products/bassoon/bassoon-outer-planer"
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-body font-semibold uppercase tracking-wide hover:bg-primary-700 transition-colors"
                >
                  {t('featured.learnMore')}
                </Link>
                <Link
                  href="/contact?product=bassoon-outer-planer"
                  className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-body font-semibold uppercase tracking-wide hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t('featured.sendInquiry')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {t('ctaSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-body font-semibold uppercase tracking-wide hover:bg-primary-700 transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}

// Icon Components
function DropletIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-4.03-9-9 0-3.53 4.5-9.5 9-12 4.5 2.5 9 8.47 9 12 0 4.97-4.03 9-9 9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-3-3m0 0l3-3m-3 3h6" />
    </svg>
  );
}

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
