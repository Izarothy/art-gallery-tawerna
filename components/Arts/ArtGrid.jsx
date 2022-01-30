import React from 'react';
import ArtCategory from './ArtCategory';

const ArtGrid = ({ currentCategory, searchValue, arts, categories }) => {
  return currentCategory ? (
    <div>
      {categories.map((category, idx) => {
        return (
          currentCategory.name === category.name && (
            <ArtCategory
              key={idx}
              category={category}
              searchValue={searchValue}
              arts={arts.filter((art) => art.category === category.name)}
            />
          )
        );
      })}
    </div>
  ) : (
    <div>Nie znaleziono żadnych kategorii</div>
  );
};

export default ArtGrid;
