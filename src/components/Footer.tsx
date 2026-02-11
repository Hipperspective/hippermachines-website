'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const tMetadata = useTranslations('metadata');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo-hipper-icon.svg"
                alt="Hipper Machines"
                width={36}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-lg text-white leading-none">Hipper</span>
                <span className="font-body font-light tracking-[0.25em] uppercase text-[9px] text-gray-400">Machines</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2 font-body">
              {tMetadata('description')}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-medium text-white mb-4">{t('contact')}</h3>
            <address className="not-italic text-sm space-y-2 font-body">
              <p>Christoph Hipper</p>
              <p>Osterkam 21</p>
              <p>D-83101 Rohrdorf</p>
              <p className="pt-2">
                <a
                  href="mailto:info@hippermachines.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@hippermachines.com
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-white mb-4">{t('products')}</h3>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/products/bassoon"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t('bassoon')}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/imprint"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t('imprint')}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400 font-body">
          <p>
            &copy; {currentYear} Hipper Machines. {tCommon('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
