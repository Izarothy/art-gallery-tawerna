import React from 'react';
import data from '../data/data.json';

import Category from './Category';
const Categories = ({ currentCategory, setCurrentCategory }) => {
  return (
    <div>
      <span className="text-sm text-gray-500">Kategorie</span>
      <div className="flex flex-col gap-3 pl-3 pt-2">
        {data.categories.map((category, idx) => {
          return (
            <Category
              key={idx}
              category={category}
              count={category.arts.length}
              active={category === currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
