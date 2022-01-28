import React from 'react';
import ArtCategory from './ArtCategory';

import { categories } from '../data/data.json';
ArtCategory;
const ArtGrid = ({ currentCategory }) => {
  return (
    <div>
      {categories.map((category, idx) => {
        return (
          currentCategory.name === category.name && (
            <ArtCategory key={idx} category={category} />
          )
        );
      })}
    </div>
  );
};

export default ArtGrid;
