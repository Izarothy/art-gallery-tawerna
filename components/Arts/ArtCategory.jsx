import React from 'react';
import Art from './Art';

const ArtCategory = ({ category, searchValue, arts }) => {
  return (
    <div>
      <h3 className="text-gray-800 dark:text-gray-200 text-2xl mt-10 mb-4">
        {category.name}
      </h3>
      {arts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {arts.map((art, idx) => {
            return (
              art.title.toLowerCase().includes(searchValue) && (
                <Art key={idx} url={art.url} name={art.title} />
              )
            );
          })}
        </div>
      ) : (
        <div>Nie znaleziono żadnych artów w tej kategorii</div>
      )}
    </div>
  );
};

export default ArtCategory;
