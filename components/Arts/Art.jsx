import React, { useState } from 'react';
import Image from 'next/image';
import author from '../../data/user.json';

const Art = ({ url, name }) => {
  const [artHovered, setArtHovered] = useState(false);
  return (
    <div
      className="flex flex-col relative"
      onMouseEnter={() => setArtHovered(true)}
      onMouseLeave={() => setArtHovered(false)}
    >
      <div>
        <Image
          src={url}
          width={256}
          height={256}
          layout="responsive"
          alt="Art"
          className="rounded-xl duration-500 hover:scale-150"
          objectFit="cover"
        />
      </div>
      <span className="absolute flex items-center justify-between w-full gap-4 bottom-0 pb-2 px-3">
        <div className="flex items-center gap-4 opacity-80">
          <Image
            width={36}
            height={36}
            layout="fixed"
            src={author.avatar}
            alt="User avatar"
            className="rounded-full"
            objectFit="cover"
          />
          <h3>{author.name}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`${artHovered ? `block` : `hidden`} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </span>
    </div>
  );
};

export default Art;
