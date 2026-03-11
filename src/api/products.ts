import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple',
    category: ProductCategory.Fruit,
    status: ProductStatus.Active,
    price: 1.5,
  },
  {
    id: 2,
    name: 'Banana',
    category: ProductCategory.Fruit,
    status: ProductStatus.Active,
    price: 0.75,
  },
  {
    id: 3,
    name: 'Mango',
    category: ProductCategory.Fruit,
    status: ProductStatus.Inactive,
    price: 2.3,
  },
  {
    id: 4,
    name: 'Strawberry',
    category: ProductCategory.Fruit,
    status: ProductStatus.Active,
    price: 3.99,
  },
  {
    id: 5,
    name: 'Broccoli',
    category: ProductCategory.Vegetables,
    status: ProductStatus.Active,
    price: 1.2,
  },
  {
    id: 6,
    name: 'Carrot',
    category: ProductCategory.Vegetables,
    status: ProductStatus.Active,
    price: 0.9,
  },
  {
    id: 7,
    name: 'Spinach',
    category: ProductCategory.Vegetables,
    status: ProductStatus.Inactive,
    price: 1.75,
  },
  {
    id: 8,
    name: 'Tomato',
    category: ProductCategory.Vegetables,
    status: ProductStatus.Active,
    price: 1.1,
  },
  {
    id: 9,
    name: 'Beef Steak',
    category: ProductCategory.Meat,
    status: ProductStatus.Active,
    price: 12.5,
  },
  {
    id: 10,
    name: 'Chicken Breast',
    category: ProductCategory.Meat,
    status: ProductStatus.Active,
    price: 7.8,
  },
  {
    id: 11,
    name: 'Pork Ribs',
    category: ProductCategory.Meat,
    status: ProductStatus.Inactive,
    price: 9.99,
  },
  {
    id: 12,
    name: 'Lamb Chops',
    category: ProductCategory.Meat,
    status: ProductStatus.Active,
    price: 15.0,
  },
];

const randomDelay = () => Math.floor(Math.random() * 800) + 200;

export const getProductList = (): Promise<Product[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTS), randomDelay());
  });
