export interface Product {
  id: string;
  category: 'bassoon' | 'oboe';
  nameKey: string;
  priceNet: number;
  priceBrutto: number;
  vatRate: number;
  image?: string;
  images?: string[];
  descriptionKey?: string;
}

export const products: Product[] = [
  // BASSOON PRODUCTS
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
    ],
    descriptionKey: 'productDescriptions.gougingMachine',
  },
  {
    id: 'bassoon-winding-machine',
    category: 'bassoon',
    nameKey: 'products.bassoon.windingMachine',
    priceNet: 587.39,
    priceBrutto: 699.00,
    vatRate: 19,
    image: '/images/products/wickelmaschine-1.jpg',
    images: [
      '/images/products/wickelmaschine-1.jpg',
      '/images/products/wickelmaschine-2.jpg',
      '/images/products/wickelmaschine-3.jpg',
      '/images/products/wickelmaschine-4.jpg',
    ],
  },
];

export const getProductsByCategory = (category: 'bassoon' | 'oboe'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
