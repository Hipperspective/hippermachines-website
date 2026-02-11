'use client';

import { useTranslations } from 'next-intl';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';

export default function OboeProductsPage() {
  const t = useTranslations('products');
  const tNav = useTranslations('navigation');
  const oboeProducts = getProductsByCategory('oboe');

  return (
    <div className="bg-white dark:bg-[#1A1816]">
      {/* Page Header */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-white text-center">
            {t('oboe.title')}
          </h1>
          <p className="font-body font-light text-lg text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            {t('oboe.description')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {oboeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
