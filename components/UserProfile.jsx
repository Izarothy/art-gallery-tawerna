import React, { useContext } from 'react';
import Image from 'next/image';
import { UserContext } from '../context/UserContext.js';

const UserProfile = () => {
  const user = useContext(UserContext);
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={user.avatar}
        width={48}
        height={48}
        layout="fixed"
        alt="Name"
        className="rounded-full"
      />
      <h2 className="text-gray-700 font-semibold dark:text-gray-100">
        {user.name}
      </h2>
    </div>
  );
};

export default UserProfile;
