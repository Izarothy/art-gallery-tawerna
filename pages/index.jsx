// Style work, mostly colors and sidebar categories - improved but still too empty/basic
// Category for place/person
// Auth & admin panel to add arts in a restrictive way
// Mobile view

// Framework imports
import { useState, useEffect } from 'react';
import Head from 'next/head';

// Component imports
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import DarkModeButton from '../components/DarkModeButton';
import ArtGrid from '../components/ArtGrid';

// Helper functions imports
import updateDarkMode from '../lib/updateDarkMode';
import fetchData from '../lib/fetchData';

const artRoute = '/api/arts';
const categoryRoute = '/api/categories';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetchData(artRoute).then((data) => setArts(data));
    fetchData(categoryRoute).then((data) => {
      setCategories(data);
    });

    // Get saved dark mode state from localStorage
    const savedTheme = localStorage.getItem('savedTheme');
    if (savedTheme) {
      // Local storage stores logic values as string so have to compare to 'true' here
      setDarkMode(savedTheme === 'true');
    }
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
        className={`min-h-screen flex font-poppins bg-gray-200 p-6 dark:bg-zinc-900 dark:text-gray-100 `}
      >
        <SideBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          arts={arts}
        />
        <main className="px-6 w-full">
          <div className="flex gap-6 items-center">
            <SearchBar setSearchValue={setSearchValue} />
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <ArtGrid
            currentCategory={currentCategory}
            searchValue={searchValue}
            arts={arts}
            categories={categories}
          />
        </main>
      </div>
    </>
  );
}
