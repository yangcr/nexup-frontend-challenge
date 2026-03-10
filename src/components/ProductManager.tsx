import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { ProductCategory } from '../models/ProductCategory';

export const ProductManager: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = React.useState<
    'All' | ProductCategory
  >('All');

  return (
    <div>
      <CategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
      <ProductList productList={[]} />
    </div>
  );
};
