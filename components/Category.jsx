import React from 'react';

const Category = ({ category, count, active, setCurrentCategory }) => {
  const { name } = category;
  return (
    <button
      className="flex justify-between cursor-pointer"
      onClick={() => {
        setCurrentCategory(category);
      }}
    >
      <h3>{name}</h3>
      <div className="flex gap-3">
        <span>{count}</span>
        <span className="text-gray-500">{active ? '>' : ''}</span>
      </div>
    </button>
  );
};

export default Category;
