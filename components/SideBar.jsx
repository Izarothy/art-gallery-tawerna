import React from 'react';
import UserProfile from './UserProfile';
import Categories from './Categories/Categories';
import HomeButton from './HomeButton';

const SideBar = ({ currentCategory, setCurrentCategory, arts }) => {
  return (
    <aside className="w-1/4 lg:w-1/6 border-r border-gray-300 dark:border-gray-700 flex flex-col gap-10 pr-6">
      <HomeButton />
      <UserProfile avatar="https://picsum.photos/100" name="izaroth" />
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        arts={arts}
      />
    </aside>
  );
};

export default SideBar;
