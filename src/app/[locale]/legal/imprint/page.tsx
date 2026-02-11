'use client';

import { useTranslations } from 'next-intl';

export default function ImprintPage() {
  const t = useTranslations('legal');

  return (
    <div className="bg-white dark:bg-[#1A1816]">
      {/* Page Header */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white text-center">
            {t('imprintTitle')}
          </h1>
        </div>
      </section>

      {/* Imprint Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none font-body">
            {/* Angaben gemaess 5 TMG */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection1Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Christoph Hipper<br />
              Hipper Machines<br />
              Osterkam 21<br />
              D-83101 Rohrdorf
            </p>

            {/* Kontakt */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection2Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('imprintEmail')}: info@hippermachines.com
            </p>

            {/* Umsatzsteuer-ID */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection3Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('imprintVatText')}
            </p>

            {/* Streitschlichtung */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection4Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('imprintDisputeText1')}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('imprintDisputeText2')}
            </p>

            {/* Haftung fuer Inhalte */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection5Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('imprintLiabilityContent')}
            </p>

            {/* Haftung fuer Links */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection6Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('imprintLiabilityLinks')}
            </p>

            {/* Urheberrecht */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprintSection7Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('imprintCopyright')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
