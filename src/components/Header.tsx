'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navLinkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-body font-medium transition-colors ${
      isActive(path)
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
    }`;

  return (
    <header className="sticky top-0 z-50 shadow-sm dark:shadow-none dark:border-b dark:border-gray-800" style={{ backgroundColor: 'var(--header-bg, #FFFFFF)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/logo/logo-hipper-icon.svg"
              alt="Hipper Machines"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-xl text-gray-900 dark:text-white leading-none">Hipper</span>
              <span className="font-body font-light tracking-[0.25em] uppercase text-[10px] text-gray-600 dark:text-gray-400">Machines</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className={navLinkClass('/')}>
              {t('home')}
            </Link>
            <Link href="/about" className={navLinkClass('/about')}>
              {t('about')}
            </Link>

            <Link href="/products/bassoon" className={navLinkClass('/products')}>
              {t('products')}
            </Link>

            <Link href="/contact" className={navLinkClass('/contact')}>
              {t('contact')}
            </Link>
          </nav>

          {/* Theme Toggle & Language Selector (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800"
            >
              <span className="sr-only">{t('openMenu')}</span>
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-[#1A1816] border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-3 min-h-[44px] flex items-center rounded-md text-base font-body font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('home')}
          </Link>
          <Link
            href="/about"
            className="block px-3 py-3 min-h-[44px] flex items-center rounded-md text-base font-body font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('about')}
          </Link>
          <Link
            href="/products/bassoon"
            className="block px-3 py-3 min-h-[44px] flex items-center rounded-md text-base font-body font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('products')}
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-3 min-h-[44px] flex items-center rounded-md text-base font-body font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('contact')}
          </Link>

          {/* Language Selector (Mobile) */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
