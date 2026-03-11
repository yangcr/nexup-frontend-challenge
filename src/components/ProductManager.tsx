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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList productList={filteredProducts} />
      )}
    </div>
  );
};
