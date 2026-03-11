import React from 'react';
import { Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const isActive = product.status === ProductStatus.Active;

  return (
    <article className="product-item">
      <header className="product-item__header">
        <h3 className="product-name">{product.name}</h3>
        <span
          className={`product-status ${isActive ? 'product-status--active' : 'product-status--inactive'}`}
        >
          {product.status}
        </span>
      </header>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p
        className={`product-stock ${product.stock === 0 ? 'product-stock--empty' : ''}`}
      >
        Stock: {product.stock}
      </p>
    </article>
  );
};
