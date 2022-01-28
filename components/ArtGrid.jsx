import React from 'react';
import ArtCategory from './ArtCategory';

import { categories } from '../data/data.json';
ArtCategory;
const ArtGrid = () => {
  return (
    <div>
      {categories.map((category, idx) => {
        return <ArtCategory key={idx} category={category.name} />;
      })}
    </div>
  );
};

export default ArtGrid;
