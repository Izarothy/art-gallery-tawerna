// Auth & admin panel to add arts in a restrictive way

// Framework imports
import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';

// Component imports
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import DarkModeButton from '../components/DarkModeButton';
import ArtGrid from '../components/Arts/ArtGrid';
import Footer from '../components/Footer';
import HomeButtonMobile from '../components/Mobile/HomeButtonMobile';
import CategoryMenuMobile from '../components/Mobile/CategoryMenuMobile';

// Helper functions imports
import updateDarkMode from '../lib/updateDarkMode';
import fetchData from '../lib/fetchData';
import fetchTheme from '../lib/fetchTheme';

import { UserContext } from '../context/UserContext.js';
const artRoute = '/api/arts';
const categoryRoute = '/api/categories';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [arts, setArts] = useState([]);
  const [user, setUser] = useState({
    name: 'Guest',
    avatar:
      'https://www.croptecshow.com/wp-content/uploads/2017/04/guest-avatar-250x250px.png',
  });

  useEffect(() => {
    // Fetch arts and categories from API
    fetchData(artRoute).then((data) => setArts(data));
    fetchData(categoryRoute).then((data) => setCategories(data));

    // Fetch theme from localStorage
    fetchTheme(setDarkMode);
  }, []);

  useEffect(() => {
    updateDarkMode(darkMode);
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <div
        className={`h-screen flex font-poppins bg-gray-200 pt-6 md:px-6 pb-0 dark:bg-zinc-900 dark:text-gray-100 overflow-y-hidden `}
      >
        <UserContext.Provider value={user}>
          <SideBar
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            arts={arts}
          />
          <main className="w-full">
            <header className="sticky md:static flex gap-6 items-center mb-4 px-2">
              <HomeButtonMobile />
              <SearchBar setSearchValue={setSearchValue} />
              <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </header>
            <CategoryMenuMobile
              categories={categories}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
            <div className="flex flex-col h-full px-6">
              <ArtGrid
                currentCategory={currentCategory}
                searchValue={searchValue}
                arts={arts}
                categories={categories}
              />
              <Footer />
            </div>
          </main>
        </UserContext.Provider>
      </div>
    </>
  );
}
