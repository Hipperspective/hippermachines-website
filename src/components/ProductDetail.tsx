'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductDetailProps {
  product: Product;
  category: 'bassoon' | 'oboe';
}

export default function ProductDetail({ product, category }: ProductDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const tProducts = useTranslations('products');
  const tCommon = useTranslations('common');
  const tDesc = useTranslations('productDescriptions');
  const tNav = useTranslations('navigation');

  // Get the product name from the translation key
  const getProductName = () => {
    const parts = product.nameKey.split('.');
    if (parts.length === 3) {
      const categoryPart = parts[1];
      const key = parts[2];
      return tProducts(`${categoryPart}.${key}`);
    }
    return product.nameKey;
  };

  const productName = getProductName();
  const images = product.images || (product.image ? [product.image] : []);

  // Determine which description to show based on product ID
  const getDescription = () => {
    // Duplikator machines (tip-profiling)
    if (product.id.includes('duplikator')) {
      return {
        intro: tDesc('duplikator.intro'),
        uniqueFeature: tDesc('duplikator.uniqueFeature'),
        functionsTitle: tDesc('duplikator.functionsTitle'),
        function1: tDesc('duplikator.function1'),
        function2: tDesc('duplikator.function2'),
        function3: tDesc('duplikator.function3'),
        benefits: tDesc('duplikator.benefits'),
        cutterInfo: tDesc('duplikator.cutterInfo'),
        type: 'duplikator' as const,
      };
    }
    // Inner planers / Gouging machines
    if (product.id.includes('inner-planer') || product.id.includes('inner-preplaner') || product.id.includes('inner-finisher')) {
      return {
        intro: tDesc('gougingMachine.intro'),
        description: tDesc('gougingMachine.description'),
        features: tDesc('gougingMachine.features'),
        dryMilling: tDesc('gougingMachine.dryMilling'),
        cutter: tDesc('gougingMachine.cutter'),
        type: 'gougingMachine' as const,
      };
    }
    // Outer planer / Profiling machine (bassoon only)
    if (product.id.includes('outer-planer')) {
      return {
        intro: tDesc('profilingMachine.intro'),
        description: tDesc('profilingMachine.description'),
        dryMilling: tDesc('profilingMachine.dryMilling'),
        cutter: tDesc('profilingMachine.cutter'),
        type: 'profilingMachine' as const,
      };
    }
    // Winding machine
    if (product.id.includes('winding-machine')) {
      return {
        intro: tDesc('windingMachine.intro'),
        description: tDesc('windingMachine.description'),
        features: tDesc('windingMachine.features'),
        benefit: tDesc('windingMachine.benefit'),
        type: 'windingMachine' as const,
      };
    }
    // Accessories and smaller products - no long description
    return null;
  };

  const description = getDescription();
  const categoryTitle = category === 'bassoon' ? tProducts('bassoon.title') : tProducts('oboe.title');

  return (
    <div className="bg-white dark:bg-[#1A1816]">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-body">
            <li>
              <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                {tNav('home')}
              </Link>
            </li>
            <li className="dark:text-gray-500">/</li>
            <li>
              <Link href={`/products/${category}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                {tNav(category)}
              </Link>
            </li>
            <li className="dark:text-gray-500">/</li>
            <li className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">
              {productName}
            </li>
          </ol>
        </nav>

        {/* Product Images - Gallery with Thumbnails */}
        <div className="mb-20 max-w-2xl mx-auto">
          {images.length > 0 ? (
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[4/3] bg-gray-100 dark:bg-[#252220] rounded-xl overflow-hidden">
                <Image
                  src={images[currentImage]}
                  alt={`${productName} ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority
                />
              </div>

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div className="flex justify-center gap-3">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        currentImage === index
                          ? 'ring-2 ring-primary-600 dark:ring-primary-400 ring-offset-2 dark:ring-offset-[#1A1816]'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`${productName} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // No images placeholder
            <div className="relative aspect-[4/3] bg-gray-100 dark:bg-[#252220] rounded-xl overflow-hidden flex items-center justify-center">
              <svg
                className="w-24 h-24 text-gray-300"
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

        {/* Product Info - Full Width Below */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-2">{productName}</h1>

          {/* Price - Subtle */}
          <p className="font-body text-lg text-gray-500 dark:text-gray-400 mb-8">
            ab {product.priceBrutto.toLocaleString('de-DE')} €
          </p>

          {description && (
            <div className="prose prose-gray dark:prose-invert max-w-none mb-10 font-body text-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{description.intro}</p>

              {description.type === 'duplikator' && (
                <>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{description.uniqueFeature}</p>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {description.functionsTitle}
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400 mb-4">
                    <li>{description.function1}</li>
                    <li>{description.function2}</li>
                    <li>{description.function3}</li>
                  </ol>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{description.benefits}</p>
                  <p className="text-gray-600 dark:text-gray-400">{description.cutterInfo}</p>
                </>
              )}

              {description.type === 'gougingMachine' && (
                <>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">{description.description}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{description.features}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{description.dryMilling}</p>
                  <p className="text-gray-600 dark:text-gray-400">{description.cutter}</p>
                </>
              )}

              {description.type === 'profilingMachine' && (
                <>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{description.description}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{description.dryMilling}</p>
                  <p className="text-gray-600 dark:text-gray-400">{description.cutter}</p>
                </>
              )}

              {description.type === 'windingMachine' && (
                <>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{description.description}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{description.features}</p>
                  <p className="text-gray-600 dark:text-gray-400">{description.benefit}</p>
                </>
              )}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/contact?product=${product.id}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-body font-semibold rounded-lg hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {tCommon('sendInquiry')}
            </Link>
            <a
              href="mailto:info@hippermachines.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-body font-medium rounded-lg hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@hippermachines.com
            </a>
          </div>

          {/* Back Link */}
          <div>
            <Link
              href={`/products/${category}`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium font-body py-2"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {categoryTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
