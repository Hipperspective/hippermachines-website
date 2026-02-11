'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('home');

  return (
    <section className="relative bg-[#FAF8F5] dark:bg-[#1A1816] overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F0EDE8] dark:bg-[#252220] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 sm:py-28 lg:py-32">

          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-[1.1]">
              {t('heroTitle')}
            </h1>

            <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/bassoon"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-7 py-3.5 rounded-lg font-body font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('viewProducts')}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-7 py-3.5 rounded-lg font-body font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-white dark:hover:bg-[#252220] transition-colors"
              >
                {t('contactUs')}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-body text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.handmade')}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.worldwide')}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.byMusicians')}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.madeInGermany')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 dark:shadow-none">
              <Image
                src="/images/workshop/workshop-1.jpg"
                alt="Hipper Machines Workshop"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-600 rounded-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
