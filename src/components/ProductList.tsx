import React from 'react';
import { Product } from '../models/Product';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  if (productList.length === 0) {
    return (
      <p className="empty-state">No products match the current filters.</p>
    );
  }

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
