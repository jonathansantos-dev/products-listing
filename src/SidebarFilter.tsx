// SidebarFilter.tsx
import React from 'react';

type SidebarFilterProps = {
  onSearch: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  onSearch,
  onCategoryChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => onSearch(e.target.value)}
      />

      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All categories</option>
        {/* Você vai popular dinamicamente */}
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>
    </div>
  );
};

export default SidebarFilter;
