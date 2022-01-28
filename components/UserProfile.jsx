import React from 'react';
import Image from 'next/image';

const UserProfile = ({ avatar, name }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={avatar}
        width={48}
        height={48}
        layout="fixed"
        alt="Name"
        className="rounded-full"
      />
      <h2 className="text-gray-700 font-semibold">{name}</h2>
    </div>
  );
};

export default UserProfile;
