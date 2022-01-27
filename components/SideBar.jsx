import React from 'react';
import UserProfile from './UserProfile';
import Link from 'next/link';
import Categories from './Categories';

const SideBar = () => {
  return (
    <aside className="border-r border-gray-400 flex flex-col gap-10 pl-6 pr-12">
      <Link href="/" passHref>
        <div className="flex items-center gap-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <h1 className="text-3xl font-medium">Art Gallery</h1>
        </div>
      </Link>
      <UserProfile avatar="https://picsum.photos/100" name="izaroth" />
      <Categories />
    </aside>
  );
};

export default SideBar;
