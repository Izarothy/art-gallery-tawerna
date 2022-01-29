import React from 'react';
import ArtCategory from './ArtCategory';

import { categories } from '../data/data.json';
ArtCategory;
const ArtGrid = ({ currentCategory, searchValue }) => {
  return (
    <div>
      {categories.map((category, idx) => {
        return (
          currentCategory.name === category.name && (
            <ArtCategory
              key={idx}
              category={category}
              searchValue={searchValue}
            />
          )
        );
      })}
    </div>
  );
};

export default ArtGrid;
