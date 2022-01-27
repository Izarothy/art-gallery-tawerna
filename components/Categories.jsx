import React, { useState } from 'react';
import Category from './Category';
import data from '../data/data.json';
const Categories = () => {
  const [currentCategory, setCurrentCategory] = useState(data.categories[0]);
  return (
    <div>
      <span className="text-sm text-gray-500">Kategorie</span>
      <div className="flex flex-col gap-3 pl-3 pt-2">
        {data.categories.map((category, idx) => {
          return (
            <Category
              key={idx}
              category={category}
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
