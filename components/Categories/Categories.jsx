import React, { useState, useEffect } from 'react';
import Category from './Category';

import fetchData from '../../lib/fetchData';
const categoryRoute = '/api/categories';

const Categories = ({ currentCategory, setCurrentCategory, arts }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData(categoryRoute).then((data) => {
      setCurrentCategory(data[0]);
      setCategories(data);
    });
  }, []);

  return (
    <div>
      <span className="text-sm text-gray-500">Kategorie</span>
      <div className="flex flex-col gap-3 pl-3 pt-2">
        {categories &&
          categories.map((category, idx) => {
            return (
              <Category
                key={idx}
                category={category}
                count={
                  arts.filter((art) => art.category === category.name).length
                }
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
