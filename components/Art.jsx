import React from 'react';
import Image from 'next/image';

const Art = ({ url, name }) => {
  return (
    <div className="flex flex-col hover:opacity-40 cursor-pointer">
      <Image
        src={url}
        width={256}
        height={256}
        layout="responsive"
        alt="Art"
        className="rounded-2xl"
        objectFit="cover"
      />
      <p className="text-center py-2">{name}</p>
    </div>
  );
};

export default Art;
