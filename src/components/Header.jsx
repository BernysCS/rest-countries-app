import React, { useState } from "react";
import "../styles/index.css";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    const html = document.documentElement;
    html.setAttribute("data-theme", isDark ? "" : "dark");
    setIsDark(p => !p);
  };

  return (
    <header className="bg-Grey-50 dark:bg-Blue-900">
      <div className="flex justify-between items-center py-8 px-4 md:py-4 md:px-0 md:mx-auto md:max-w-6xl ">
        <p className="font-Nunito font-extrabold text-Grey-950 dark:text-white">Where in the world?</p>
        <div>
          <button onClick={toggleDark} className="flex items-center gap-2">
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-white md:size-3"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-Grey-950 md:size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          <p className="text-sm font-semibold text-Grey-900 dark:text-White md:text-xs">Dark Mode</p>
          </button>
        </div>
      </div>
    </header>

  );
};

export default Header;
