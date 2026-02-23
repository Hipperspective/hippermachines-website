'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function HomePage() {
  const t = useTranslations('home');

  // Mobile carousel state (video + photos)
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const totalSlides = 5; // 1 video + 4 photos

  const heroImages = [
    '/images/products/wickelmaschine-1.jpg',
    '/images/products/wickelmaschine-2.jpg',
    '/images/products/wickelmaschine-3.jpg',
    '/images/products/wickelmaschine-4.jpg',
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  // Auto-advance for photos (not video)
  useEffect(() => {
    if (currentSlide === 0) {
      // Video slide - wait for video to loop or set longer timeout
      const timeout = setTimeout(nextSlide, 8000);
      return () => clearTimeout(timeout);
    } else {
      // Photo slides - 4 seconds each
      const timeout = setTimeout(nextSlide, 4000);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, nextSlide]);

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
      {/* Hero Section - Mobile: Stacked Layout */}
      <section className="md:hidden relative bg-[#FAF8F5] dark:bg-[#1A1816] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6 leading-[1.1] text-center">
            {t('hero.title')}
          </h1>

          {/* Video + Photo Carousel */}
          <div className="relative mb-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              {/* Video (slide 0) */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  currentSlide === 0 ? 'opacity-100' : 'opacity-0'
                }`}
                poster="/images/products/wickelmaschine-1.jpg"
              >
                <source src="/videos/wickelmaschine.m4v" type="video/mp4" />
              </video>

              {/* Photos (slides 1-4) */}
              {heroImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Wickelmaschine ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                />
              ))}

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/50 flex items-center justify-center shadow-lg"
                aria-label="Previous"
              >
                <svg className="w-4 h-4 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-black/50 flex items-center justify-center shadow-lg"
                aria-label="Next"
              >
                <svg className="w-4 h-4 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-6'
                        : 'bg-white/50 w-2'
                    }`}
                    aria-label={index === 0 ? 'Video' : `Photo ${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-center">
            {t('hero.subtitle')}
          </p>

          {/* Price Display */}
          <div className="mb-6 text-center">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-primary-600 dark:text-red-500">
              {t('hero.priceFrom')}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@hippermachines.com?subject=Wickelmaschine%20Order%20Inquiry"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-body font-medium hover:bg-primary-700 transition-all duration-200"
            >
              {t('hero.orderNow')}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <button
              onClick={() => scrollToSection('machines')}
              className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-body font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              {t('hero.learnMore')}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-body text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('trust.handmade')}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('trust.worldwide')}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('trust.byMusicians')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Desktop/iPad: Fullscreen Video Background */}
      <section className="hidden md:flex relative min-h-[90vh] items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/products/wickelmaschine-1.jpg"
          >
            <source src="/videos/wickelmaschine.m4v" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl lg:text-6xl font-semibold text-white mb-6 leading-[1.1]">
              {t('hero.title')}
            </h1>

            <p className="font-body text-xl text-gray-200 mb-6 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Price Display */}
            <div className="mb-8">
              <span className="font-heading text-4xl font-bold text-red-500">
                {t('hero.priceFrom')}
              </span>
            </div>

            <div className="flex flex-row gap-4">
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
                onClick={() => scrollToSection('machines')}
                className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-3.5 rounded-lg font-body font-medium hover:border-white/50 hover:bg-white/10 transition-colors"
              >
                {t('hero.learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-body text-sm text-gray-300">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.handmade')}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.worldwide')}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('trust.byMusicians')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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
      <section id="machines" className="py-16 sm:py-24 bg-[#F0EDE8] dark:bg-[#252220]">
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
                  <p className="font-body text-lg font-semibold text-primary-600 dark:text-red-500">
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
