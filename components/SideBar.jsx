import React from 'react';
import UserProfile from './UserProfile';
import Categories from './Categories';
import HomeButton from './HomeButton';

const SideBar = ({ currentCategory, setCurrentCategory }) => {
  return (
    <aside className="w-1/4 lg:w-1/6 border-r border-gray-300 flex flex-col gap-10 pr-6">
      <HomeButton />
      <UserProfile avatar="https://picsum.photos/100" name="izaroth" />
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
    </aside>
  );
};

export default SideBar;
