import React from 'react';

const SearchBar = () => {
  return (
    <span className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute ml-2 mt-2 z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        name=""
        id=""
        className="-z-[1] pl-10 rounded-lg py-2 w-full border border-gray-200 focus:outline-none focus:shadow-outline"
        placeholder="Szukaj artów po nazwie..."
      />
    </span>
  );
};

export default SearchBar;
