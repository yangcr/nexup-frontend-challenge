import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import { Product } from '../models/Product';
import { CategorySelection } from '../models/CategorySelection';
import { getProductList } from '../api/products';
import { useDebounce } from '../hooks/useDebounce';

export const ProductManager: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryFilter, setCategoryFilter] =
    React.useState<CategorySelection>('All');
  const [textFilter, setTextFilter] = React.useState('');
  const [inStockOnly, setInStockOnly] = React.useState(false);

  const debouncedTextFilter = useDebounce(textFilter, 300);

  React.useEffect(() => {
    setLoading(true);
    getProductList().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryFilter === 'All' || product.category === categoryFilter;

    const matchesText = product.name
      .toLowerCase()
      .includes(debouncedTextFilter.trim().toLowerCase());

    const matchesStock = !inStockOnly || product.stock > 0;

    return matchesCategory && matchesText && matchesStock;
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
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In stock only
        </label>
      </div>
      {loading ? (
        <div className="loading-spinner" />
      ) : (
        <ProductList productList={filteredProducts} />
      )}
    </div>
  );
};
