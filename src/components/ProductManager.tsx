import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { ProductCategory } from '../models/ProductCategory';
import { Product } from '../models/Product';
import { getProductList } from '../api/products';

export const ProductManager: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = React.useState<
    'All' | ProductCategory
  >('All');

  React.useEffect(() => {
    setProducts(getProductList());
  }, []);

  const filteredProducts =
    categoryFilter === 'All'
      ? products
      : products.filter((p) => p.category === categoryFilter);

  return (
    <div>
      <CategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
      <ProductList productList={filteredProducts} />
    </div>
  );
};
