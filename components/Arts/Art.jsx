import React from 'react';
import Image from 'next/image';

const Art = ({ url, name }) => {
  return (
    <div className="flex flex-col ">
      <div>
        <Image
          src={url}
          width={256}
          height={256}
          layout="responsive"
          alt="Art"
          className="rounded-xl hover:opacity-40 cursor-pointer"
          objectFit="cover"
        />
      </div>
      <p className="text-center py-2">{name}</p>
    </div>
  );
};

export default Art;