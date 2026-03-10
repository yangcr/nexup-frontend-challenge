import React from 'react';
import { Product } from '../models/Product';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  productList: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  return (
    <div>
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
