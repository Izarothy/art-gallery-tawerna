import React from 'react';
import Link from 'next/link';
const HomeButton = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-3 cursor-pointer">
        <h1 className="md:text-xl xl:text-3xl font-medium">Art Gallery</h1>
      </div>
    </Link>
  );
};

export default HomeButton;
