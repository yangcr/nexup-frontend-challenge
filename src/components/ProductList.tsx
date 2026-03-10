import React from 'react';
import { Product } from '../models/Product';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
