import React from 'react';
import { Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const isActive = product.status === ProductStatus.Active;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        marginBottom: '10px',
      }}
    >
      <div
        title={product.status}
        style={{
          backgroundColor: isActive ? 'green' : 'red',
          borderRadius: '100%',
          width: '10px',
          height: '10px',
        }}
      />
      <span>{product.name}</span>
      <span>{product.category}</span>
      <span>${product.price.toFixed(2)}</span>
    </div>
  );
};
