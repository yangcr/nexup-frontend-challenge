import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { Product } from '../models/Product';
import { CategorySelection } from '../models/CategorySelection';
import { getProductList } from '../api/products';

export const ProductManager: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] =
    React.useState<CategorySelection>('All');
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
    <div className="product-manager">
      <div className="filters">
        <CategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
        <input
          className="filter-input"
          type="text"
          placeholder='Enter the product name. E.g: "Lamb Chops"'
          value={textFilter}
          onChange={(e) => setTextFilter(e.target.value)}
        />
      </div>
      <ProductList productList={filteredProducts} />
    </div>
  );
};
