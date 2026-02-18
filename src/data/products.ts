export interface Product {
  id: string;
  category: 'bassoon' | 'oboe';
  nameKey: string;
  priceNet: number;
  priceBrutto: number;
  vatRate: number;
  image?: string;
  images?: string[];
  imagesDark?: string[];
  descriptionKey?: string;
}

export const products: Product[] = [
  // BASSOON PRODUCTS
  {
    id: 'bassoon-winding-machine',
    category: 'bassoon',
    nameKey: 'products.bassoon.windingMachine',
    priceNet: 293.28,
    priceBrutto: 349.00,
    vatRate: 19,
    image: '/images/products/wickelmaschine-1.jpg',
    images: [
      '/images/products/wickelmaschine-1.jpg',
      '/images/products/wickelmaschine-2.jpg',
      '/images/products/wickelmaschine-3.jpg',
      '/images/products/wickelmaschine-4.jpg',
    ],
  },
  {
    id: 'bassoon-outer-planer',
    category: 'bassoon',
    nameKey: 'products.bassoon.outerPlaner',
    priceNet: 1638.66,
    priceBrutto: 1950.00,
    vatRate: 19,
    image: '/images/products/aussenhobel-1.jpg',
    images: [
      '/images/products/aussenhobel-1.jpg',
      '/images/products/aussenhobel-2.jpg',
      '/images/products/aussenhobel-3.jpg',
      '/images/products/aussenhobel-4.jpg',
    ],
    descriptionKey: 'productDescriptions.profilingMachine',
  },
  {
    id: 'bassoon-inner-planer',
    category: 'bassoon',
    nameKey: 'products.bassoon.innerPlaner',
    priceNet: 1800.00,
    priceBrutto: 2142.00,
    vatRate: 19,
    image: '/images/products/innenhobel-1.jpg',
    images: [
      '/images/products/innenhobel-1.jpg',
      '/images/products/innenhobel-2.jpg',
      '/images/products/innenhobel-3.jpg',
      '/images/products/innenhobel-4.jpg',
      '/images/products/innenhobel-5.jpg',
    ],
    descriptionKey: 'productDescriptions.gougingMachine',
  },
  {
    id: 'bassoon-ausreiber',
    category: 'bassoon',
    nameKey: 'products.bassoon.ausreiber',
    priceNet: 49.58,
    priceBrutto: 59.00,
    vatRate: 19,
    image: '/images/products/ausreiber-1-light.png',
    images: [
      '/images/products/ausreiber-1-light.png',
      '/images/products/ausreiber-2-light.png',
      '/images/products/ausreiber-3-light.png',
    ],
    imagesDark: [
      '/images/products/ausreiber-1-dark.png',
      '/images/products/ausreiber-2-dark.png',
      '/images/products/ausreiber-3-dark.png',
    ],
    descriptionKey: 'productDescriptions.ausreiber',
  },
  {
    id: 'bassoon-aufbindedorn',
    category: 'bassoon',
    nameKey: 'products.bassoon.aufbindedorn',
    priceNet: 19.00,
    priceBrutto: 22.60,
    vatRate: 19,
    image: '/images/products/aufbindedorn-1-light.png',
    images: [
      '/images/products/aufbindedorn-1-light.png',
    ],
    imagesDark: [
      '/images/products/aufbindedorn-1-dark.png',
    ],
    descriptionKey: 'productDescriptions.aufbindedorn',
  },
  {
    id: 'bassoon-schabedorn',
    category: 'bassoon',
    nameKey: 'products.bassoon.schabedorn',
    priceNet: 16.81,
    priceBrutto: 20.00,
    vatRate: 19,
    image: '/images/products/schabedorn-1-light.png',
    images: [
      '/images/products/schabedorn-1-light.png',
    ],
    imagesDark: [
      '/images/products/schabedorn-1-dark.png',
    ],
    descriptionKey: 'productDescriptions.schabedorn',
  },
  {
    id: 'bassoon-aufdrueckdorn',
    category: 'bassoon',
    nameKey: 'products.bassoon.aufdrueckdorn',
    priceNet: 16.81,
    priceBrutto: 20.00,
    vatRate: 19,
    image: '/images/products/aufdrueckdorn-1-light.png',
    images: [
      '/images/products/aufdrueckdorn-1-light.png',
    ],
    imagesDark: [
      '/images/products/aufdrueckdorn-1-dark.png',
    ],
    descriptionKey: 'productDescriptions.aufdrueckdorn',
  },
];

export const getProductsByCategory = (category: 'bassoon' | 'oboe'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
