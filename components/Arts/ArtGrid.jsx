import React from 'react';
import ArtCategory from './ArtCategory';

const ArtGrid = ({ currentCategory, searchValue, arts, categories }) => {
  return currentCategory ? (
    <div className="overflow-y-scroll h-5/6 scrollbar-hide mt:8">
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
