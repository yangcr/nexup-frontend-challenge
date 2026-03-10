import React from 'react';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {
  value: ProductCategory | 'All';
  onChange: (value: ProductCategory | 'All') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as ProductCategory | 'All');
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="All">Todos</option>
      {Object.values(ProductCategory).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
