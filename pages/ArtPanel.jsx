import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function ArtPanel() {
  const [category, setCategory] = useState('III. Era');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const sendArt = (e) => {
    e.preventDefault();
    const art = {
      title: title,
      url: url,
      category: category,
    };
    axios
      .post('/api/arts', art)
      .then((res) => {
        // Rever back to default - there's probably a better way of doing this
        setUrl('');
        setTitle('');
        setCategory('III. Era');
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Head>
        <title>Art Adding Panel</title>
      </Head>
      <div className="h-screen bg-zinc-900 grid place-items-center font-poppins">
        <form
          onSubmit={sendArt}
          className="bg-gray-400 w-1/3 h-1/2 flex flex-col p-16 gap-1"
        >
          <label htmlFor="url">URL</label>
          <input
            value={url}
            type="text"
            name="url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor="title">Tytuł</label>
          <input
            value={title}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="era">Era</label>
          <select
            name="era"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="I. Era">I. Era</option>
            <option value="II. Era">II. Era</option>
            <option value="III. Era">III. Era</option>
          </select>
          <button className="py-4 px-2 rounded-lg bg-blue-600 text-white w-1/3 self-center mt-auto">
            Wyślij
          </button>
        </form>
      </div>
    </>
  );
}
