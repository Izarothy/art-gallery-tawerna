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
import ArtGrid from '../components/Arts/ArtGrid';
import Footer from '../components/Footer';

// Helper functions imports
import updateDarkMode from '../lib/updateDarkMode';
import fetchData from '../lib/fetchData';
import fetchTheme from '../lib/fetchTheme';

const artRoute = '/api/arts';
const categoryRoute = '/api/categories';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [arts, setArts] = useState([]);

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
        className={`h-screen flex font-poppins bg-gray-200 p-6 pb-0 dark:bg-zinc-900 dark:text-gray-100 overflow-y-hidden `}
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
          <div className="flex flex-col h-full">
            <ArtGrid
              currentCategory={currentCategory}
              searchValue={searchValue}
              arts={arts}
              categories={categories}
            />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
