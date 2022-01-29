// Style work, mostly colors and sidebar categories - improved but still too empty/basic
// Hook up a DB for arts
// Category for place/person
// Auth maybe?
// Mobile view

import { useState, useEffect } from 'react';
import Head from 'next/head';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import DarkModeButton from '../components/DarkModeButton';
import ArtGrid from '../components/ArtGrid';
import data from '../data/data.json';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(data.categories[0]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('savedTheme');
    if (savedTheme) {
      // Local storage stores logic values as string so have to compare to 'true' here
      setDarkMode(savedTheme === 'true');
    }
  }, []);
  useEffect(() => {
    // Update local storage with darkMode state every time it changes
    localStorage.savedTheme = darkMode;

    // Add dark mode to the html element based on the state - this is for tailwind utility class
    document.querySelector('html').classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <div
        className={`min-h-screen flex font-poppins bg-gray-200 p-6 dark:bg-zinc-900 dark:text-gray-100 `}
      >
        <SideBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <main className="px-6 w-full">
          <div className="flex gap-6 items-center">
            <SearchBar setSearchValue={setSearchValue} />
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <ArtGrid
            currentCategory={currentCategory}
            searchValue={searchValue}
          />
        </main>
      </div>
    </>
  );
}
