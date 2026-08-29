import React from 'react';
import { CATEGORIES } from '../../constants/categories';
import './Filters.css';

export const Filters = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="filters">
      <button 
        className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
        onClick={() => setActiveCategory('all')}
      >
        All
      </button>
      {CATEGORIES.map(category => (
        <button
          key={category.id}
          className={`filter-pill ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
          style={{ 
            '--pill-color': category.swatch,
            ...(activeCategory === category.id ? { backgroundColor: category.swatch, color: 'white', borderColor: category.swatch } : {})
          }}
        >
          {category.icon} {category.label}
        </button>
      ))}
    </div>
  );
};
