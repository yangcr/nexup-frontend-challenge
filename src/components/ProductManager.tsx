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
  const [textFilter, setTextFilter] = React.useState('');

  React.useEffect(() => {
    setProducts(getProductList());
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryFilter === 'All' || product.category === categoryFilter;

    const matchesText = product.name
      .toLowerCase()
      .includes(textFilter.trim().toLowerCase());

    return matchesCategory && matchesText;
  });

  return (
    <div>
      <CategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
      <input
        type="text"
        placeholder='Enter the product name. E.g: "Lamb Chops"'
        value={textFilter}
        onChange={(e) => setTextFilter(e.target.value)}
      />
      <ProductList productList={filteredProducts} />
    </div>
  );
};
