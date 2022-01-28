import React from 'react';
import Art from './Art';

const ArtCategory = ({ category }) => {
  return (
    <div>
      <h3 className="text-gray-800 dark:text-gray-200 text-2xl my-2">
        {category.name}
      </h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {category.arts.map((art, idx) => {
          return <Art key={idx} url={art.url} name={art.name} />;
        })}
      </div>
    </div>
  );
};

export default ArtCategory;
