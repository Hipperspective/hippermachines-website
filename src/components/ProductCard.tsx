'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const tProducts = useTranslations('products');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Get the product name and short description from the translation key
  const getProductInfo = () => {
    const parts = product.nameKey.split('.');
    if (parts.length === 3) {
      const category = parts[1];
      const key = parts[2];
      return {
        name: tProducts(`${category}.${key}`),
        shortDesc: tProducts(`${category}.${key}Short`),
      };
    }
    return { name: product.nameKey, shortDesc: '' };
  };

  const { name: productName, shortDesc } = getProductInfo();
  const detailUrl = `/products/${product.category}/${product.id}`;

  // Use dark image if available and in dark mode
  const lightImage = product.image;
  const darkImage = product.imagesDark?.[0] || lightImage;
  const displayImage = isDarkMode ? darkImage : lightImage;

  return (
    <Link href={detailUrl} className="block group">
      <div className="bg-white dark:bg-[#252220] rounded-xl shadow-md dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-500">
        {/* Product Image */}
        <div className="relative h-48 bg-gray-100 dark:bg-[#2A2725]">
          {displayImage ? (
            <Image
              src={displayImage}
              alt={productName}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="font-heading text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {productName}
          </h3>
          <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {shortDesc}
          </p>
          {product.priceBrutto > 0 ? (
            <p className="font-body text-sm text-gray-500 dark:text-gray-500">
              ab {product.priceBrutto.toLocaleString('de-DE')} €
            </p>
          ) : (
            <p className="font-body text-sm text-gray-500 dark:text-gray-500">
              Preis auf Anfrage
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
