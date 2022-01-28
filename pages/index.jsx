import Head from 'next/head';
import Image from 'next/image';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <div className="min-h-screen flex font-poppins text-gray-800 bg-gray-100 p-6">
        <SideBar />
        <main className="px-6 w-full">
          <SearchBar />
        </main>
      </div>
    </div>
  );
}
