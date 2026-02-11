'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales } from '@/i18n/config';

const languageNames: Record<string, string> = {
  de: 'DE',
  en: 'EN',
  ja: 'JA',
  ko: 'KO',
  zh: 'ZH',
};

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-0.5 text-sm">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          <button
            onClick={() => handleLanguageChange(loc)}
            className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded transition-colors ${
              locale === loc
                ? 'text-primary-600 dark:text-primary-400 font-semibold'
                : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            {languageNames[loc]}
          </button>
          {index < locales.length - 1 && (
            <span className="text-gray-300 dark:text-gray-600">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
