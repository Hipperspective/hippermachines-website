'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

interface CategoryCardProps {
  category: 'bassoon' | 'oboe';
  image: string;
}

export default function CategoryCard({ category, image }: CategoryCardProps) {
  const t = useTranslations('home');
  const tNav = useTranslations('navigation');
  const tCommon = useTranslations('common');

  const descriptionKey = category === 'bassoon' ? 'bassoonDescription' : 'oboeDescription';

  return (
    <Link
      href={`/products/${category}`}
      className="group relative block bg-white dark:bg-[#252220] rounded-2xl shadow-lg dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <Image
          src={image}
          alt={tNav(category)}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-heading text-2xl font-semibold text-white mb-3">
          {tNav(category)}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 font-body">
          {t(descriptionKey)}
        </p>
        <span className="inline-flex items-center text-white font-body font-semibold group-hover:text-primary-300 transition-colors">
          {tCommon('viewProducts')}
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
