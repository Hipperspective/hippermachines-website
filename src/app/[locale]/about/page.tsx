'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const workshopImages = [
  '/images/workshop/workshop-1.jpg',
  '/images/workshop/workshop-2.jpg',
  '/images/workshop/workshop-3.jpg',
  '/images/workshop/workshop-4.jpg',
  '/images/workshop/workshop-5.jpg',
  '/images/workshop/workshop-6.jpg',
  '/images/workshop/workshop-7.jpg',
  '/images/workshop/workshop-8.jpg',
];

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="bg-white dark:bg-[#1A1816]">
      {/* Page Header */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white text-center">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('aboutTitle')}
              </h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 space-y-4 font-body font-light">
                <p>{t('aboutText1')}</p>
                <p>{t('aboutText2')}</p>
                <p>{t('aboutText3')}</p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/workshop/workshop-3.jpg"
                alt={t('workshopAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-[#F0EDE8] dark:bg-[#252220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('philosophyTitle')}
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 mx-auto font-body font-light">
              <p>{t('philosophyText1')}</p>
              <p className="mt-4">{t('philosophyText2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('specializationTitle')}
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 mx-auto font-body font-light">
              <p>{t('specializationText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-16 sm:py-24 bg-[#F0EDE8] dark:bg-[#252220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            {t('galleryTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {workshopImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`${t('workshopImageAlt')} ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
