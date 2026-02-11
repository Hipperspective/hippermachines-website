'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';

function ContactFormWrapper() {
  return <ContactForm />;
}

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="bg-white dark:bg-[#1A1816]">
      {/* Page Header */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white text-center">
            {t('title')}
          </h1>
          <p className="font-body font-light text-lg text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#252220] rounded-2xl shadow-lg dark:shadow-none p-8">
                <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t('formTitle')}
                </h2>
                <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 dark:bg-[#2A2725] rounded-lg" />}>
                  <ContactFormWrapper />
                </Suspense>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div>
              <div className="bg-[#F0EDE8] dark:bg-[#252220] rounded-2xl p-8 sticky top-24">
                <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {t('infoTitle')}
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-gray-900 dark:text-white">{t('address')}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 font-body">
                        Christoph Hipper<br />
                        Osterkam 21<br />
                        D-83101 Rohrdorf
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-gray-900 dark:text-white">{t('emailLabel')}</h3>
                      <a
                        href="mailto:info@hippermachines.com"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-1 block font-body"
                      >
                        info@hippermachines.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 h-48 bg-gray-200 dark:bg-[#2A2725] rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <p className="text-sm font-body">Rohrdorf, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
