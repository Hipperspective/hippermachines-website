import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getProductById, getProductsByCategory } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

interface Props {
  params: Promise<{ locale: string; productId: string }>;
}

export async function generateStaticParams() {
  const products = getProductsByCategory('bassoon');
  return products.map((product) => ({
    productId: product.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, productId } = await params;
  const t = await getTranslations({ locale, namespace: 'products.bassoon' });
  const product = getProductById(productId);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  // Extract the key from nameKey (e.g., "products.bassoon.duplikatorSemi" -> "duplikatorSemi")
  const nameKey = product.nameKey.split('.').pop() || '';

  return {
    title: t(nameKey),
  };
}

export default async function BassoonProductPage({ params }: Props) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product || product.category !== 'bassoon') {
    notFound();
  }

  return <ProductDetail product={product} category="bassoon" />;
}
