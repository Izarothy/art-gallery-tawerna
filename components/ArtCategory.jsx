import React from 'react';
import Art from './Art';
import { arts } from '../data/data.json';

const ArtCategory = ({ category }) => {
  return (
    <div>
      <h3 className="text-gray-800 dark:text-gray-200 text-2xl my-2">
        {category}
      </h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {arts.map((art) => {
          return <Art key={art.id} url={art.url} name={art.name} />;
        })}
      </div>
    </div>
  );
};

export default ArtCategory;
