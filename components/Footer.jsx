import React from 'react';
const Footer = () => {
  return (
    <footer className="text-sm text-gray-400 w-full flex flex-col items-end mt-4 pr-10 justify-end">
      <ul className="flex gap-8">
        <li className="hover:text-blue-300 cursor-pointer">
          <a
            href="https://github.com/Izarothy"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <a href="https://discord.gg/6uddsDd" target="_blank" rel="noreferrer">
            Discord
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
