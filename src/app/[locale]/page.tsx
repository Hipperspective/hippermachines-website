'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

export default function HomePage() {
  const t = useTranslations('home');

  // Hero carousel state
  const heroImages = [
    '/images/products/wickelmaschine-1.jpg',
    '/images/products/wickelmaschine-2.jpg',
    '/images/products/wickelmaschine-3.jpg',
    '/images/products/wickelmaschine-4.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const windingFeatures = [
    { key: 'speed', icon: ClockIcon },
    { key: 'aluminum', icon: ShieldIcon },
    { key: 'ambidextrous', icon: HandIcon },
    { key: 'mandrels', icon: ToolIcon },
    { key: 'compact', icon: CubeIcon },
    { key: 'tension', icon: GaugeIcon },
  ];

  const orderSteps = [
    { key: 'email', icon: EmailIcon, number: 1 },
    { key: 'confirm', icon: CheckCircleIcon, number: 2 },
    { key: 'build', icon: WrenchIcon, number: 3 },
    { key: 'wind', icon: SparklesIcon, number: 4 },
  ];

  const machines = [
    {
      id: 'bassoon-winding-machine',
      nameKey: 'machines.windingMachine.name',
      descKey: 'machines.windingMachine.desc',
      price: '349',
      image: '/images/products/wickelmaschine-1.jpg',
      href: '/products/bassoon/bassoon-winding-machine',
      isNew: true,
    },
    {
      id: 'bassoon-outer-planer',
      nameKey: 'machines.outerPlaner.name',
      descKey: 'machines.outerPlaner.desc',
      price: '1,950',
      image: '/images/products/aussenhobel-1.jpg',
      href: '/products/bassoon/bassoon-outer-planer',
      isNew: false,
    },
    {
      id: 'bassoon-inner-planer',
      nameKey: 'machines.innerPlaner.name',
      descKey: 'machines.innerPlaner.desc',
      price: '2,142',
      image: '/images/products/innenhobel-1.jpg',
      href: '/products/bassoon/bassoon-inner-planer',
      isNew: false,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section - Wickelmaschine Focus */}
      <section className="relative bg-[#FAF8F5] dark:bg-[#1A1816] overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F0EDE8] dark:bg-[#252220] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-24 lg:py-28">
            {/* Text Content */}
            <div className="max-w-xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-[1.1]">
                {t('hero.title')}
              </h1>

              <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* Price Display */}
              <div className="mb-8">
                <span className="inline-flex items-baseline">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {t('hero.priceFrom')}
                  </span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@hippermachines.com?subject=Wickelmaschine%20Order%20Inquiry"
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-7 py-3.5 rounded-lg font-body font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('hero.orderNow')}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <button
                  onClick={() => scrollToSection('features')}
                  className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-7 py-3.5 rounded-lg font-body font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-white dark:hover:bg-[#252220] transition-colors"
                >
                  {t('hero.learnMore')}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-body text-sm text-gray-600 dark:text-gray-400">
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
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 dark:shadow-none bg-gray-900">
                {heroImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Wickelmaschine - Bassoon Reed Winding Machine ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                  />
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 flex items-center justify-center hover:bg-white dark:hover:bg-black/70 transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 flex items-center justify-center hover:bg-white dark:hover:bg-black/70 transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-600 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 sm:py-20 bg-[#F0EDE8] dark:bg-[#252220]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-8">
              {t('problem.title')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start text-left p-6 bg-white dark:bg-[#1A1816] rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-4">
                  <ClockIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-gray-900 dark:text-white mb-2">
                    {t('problem.time.title')}
                  </h3>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400">
                    {t('problem.time.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start text-left p-6 bg-white dark:bg-[#1A1816] rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-4">
                  <HandStrainIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-gray-900 dark:text-white mb-2">
                    {t('problem.strain.title')}
                  </h3>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400">
                    {t('problem.strain.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#1A1816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {windingFeatures.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="p-6 rounded-2xl bg-white dark:bg-[#252220] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-body">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block font-body font-medium text-sm tracking-wide text-primary-400 mb-3 uppercase">
                {t('personalization.badge')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                {t('personalization.title')}
              </h2>
              <p className="font-body text-lg text-gray-300 mb-8">
                {t('personalization.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-body">{t('personalization.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-body">{t('personalization.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-body">{t('personalization.feature3')}</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/wickelmaschine-2.jpg"
                  alt="Personalized Wickelmaschine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#1A1816]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('howToOrder.title')}
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('howToOrder.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {orderSteps.map(({ key, icon: Icon, number }) => (
              <div key={key} className="relative text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-4 relative">
                  <Icon className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                    {number}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t(`howToOrder.steps.${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-body">
                  {t(`howToOrder.steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:info@hippermachines.com?subject=Wickelmaschine%20Order%20Inquiry"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-body font-semibold uppercase tracking-wide hover:bg-primary-700 transition-colors"
            >
              {t('howToOrder.cta')}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Machines Section */}
      <section className="py-16 sm:py-24 bg-[#F0EDE8] dark:bg-[#252220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('machines.title')}
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('machines.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine) => (
              <Link
                key={machine.id}
                href={machine.href}
                className="group block bg-white dark:bg-[#1A1816] rounded-2xl shadow-lg dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={t(machine.nameKey)}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {machine.isNew && (
                    <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {t('machines.newBadge')}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {t(machine.nameKey)}
                  </h3>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t(machine.descKey)}
                  </p>
                  <p className="font-body text-lg font-semibold text-primary-600 dark:text-primary-400">
                    {t('machines.priceFrom')} {machine.price} EUR
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products/bassoon"
              className="inline-flex items-center justify-center text-primary-600 dark:text-primary-400 font-body font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              {t('machines.viewAll')}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            {t('finalCta.title')}
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {t('finalCta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@hippermachines.com?subject=Wickelmaschine%20Order%20Inquiry"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-body font-semibold uppercase tracking-wide hover:bg-primary-700 transition-colors"
            >
              {t('finalCta.orderButton')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-body font-semibold uppercase tracking-wide hover:border-gray-500 hover:text-white transition-colors"
            >
              {t('finalCta.contactButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon Components
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function HandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  );
}

function ToolIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function HandStrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
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

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
