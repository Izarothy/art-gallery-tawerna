import React from 'react';

const CategoryMenuMobile = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <div className="flex gap-5 md:hidden overflow-x-scroll scrollbar-hide w-full justify-center">
      {categories.map((category) => {
        return (
          <button
            className={`${
              currentCategory.name === category.name &&
              `border-b border-blue-400`
            } text-blue-100`}
            key={category.name}
            onClick={() => setCurrentCategory(category)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryMenuMobile;
