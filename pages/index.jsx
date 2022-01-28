import { useState, useEffect } from 'react';
import Head from 'next/head';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import DarkModeButton from '../components/DarkModeButton';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
    console.log(localStorage.savedTheme);

    // Add dark mode to the html element based on the state - this is for tailwind utility class
    document.querySelector('html').classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <div
        className={`min-h-screen flex font-poppins p-6 dark:bg-gray-800 dark:text-gray-100 `}
      >
        <SideBar />
        <main className="px-6 w-full">
          <div className="flex gap-6 items-center">
            <SearchBar />
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </main>
      </div>
    </div>
  );
}
