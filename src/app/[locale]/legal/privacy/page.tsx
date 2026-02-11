'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('legal');

  return (
    <div className="bg-white dark:bg-[#1A1816]">
      {/* Page Header */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white text-center">
            {t('privacyTitle')}
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none font-body">
            {/* Datenschutz auf einen Blick */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection1Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {t('privacyIntroText')}
            </p>

            {/* Verantwortlicher */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection2Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Christoph Hipper<br />
              Hipper Machines<br />
              Osterkam 21<br />
              D-83101 Rohrdorf<br />
              E-Mail: info@hippermachines.com
            </p>

            {/* Datenerfassung auf dieser Website */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection3Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('privacyDataCollectionText')}
            </p>

            {/* Kontaktformular */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection4Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('privacyContactFormText')}
            </p>

            {/* Cookies */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection5Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('privacyCookiesText')}
            </p>

            {/* Server-Log-Dateien */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection6Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('privacyServerLogsText')}
            </p>

            {/* Ihre Rechte */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection7Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('privacyRightsText')}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-1">
              <li>{t('privacyRightAccess')}</li>
              <li>{t('privacyRightRectification')}</li>
              <li>{t('privacyRightErasure')}</li>
              <li>{t('privacyRightRestriction')}</li>
              <li>{t('privacyRightPortability')}</li>
              <li>{t('privacyRightObjection')}</li>
            </ul>

            {/* SSL-Verschluesselung */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection8Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('privacySslText')}
            </p>

            {/* Aenderungen dieser Datenschutzerklaerung */}
            <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('privacySection9Title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('privacyChangesText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
