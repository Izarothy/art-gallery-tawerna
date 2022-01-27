import React from 'react';

const Category = ({ category, active, setCurrentCategory }) => {
  const { name, count } = category;
  return (
    <button
      className="flex justify-between cursor-pointer"
      onClick={() => {
        setCurrentCategory(category);
      }}
    >
      <h3 className="font-medium">{name}</h3>
      <div className="flex gap-3">
        <span className="">{count}</span>
        <span className="text-gray-500">{active ? '>' : ''}</span>
      </div>
    </button>
  );
};

export default Category;
