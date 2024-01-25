import React, { useEffect, useState } from "react";
import { navLinks } from "../data";

export default function MobileNav() {
  const [showNav, setShowNav] = useState(false);
  const [currentPath, setCurrentPath] = useState();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setShowNav(!showNav)}
        className={` z-50 -ml-12 px-3 py-2 border rounded ${
          showNav ? "border-white fixed" : "border-gray-600 absolute"
        } transition`}
      >
        {showNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 z-50 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 z-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      {showNav ? (
        <div className="overflow-hidden fixed flex flex-col gap-y-8 justify-center items-center top-0 left-0 bg-gray-600/80 h-screen w-full transition-all delay-75">
          {navLinks.map((nav) => (
            <button onClick={() => setShowNav(false)}>
              <a
                href={nav.href}
                className={` tracking-wider text-2xl shadow ${
                  currentPath === nav.href ? "text-accent" : "text-white"
                }`}
              >
                {nav.name}
              </a>
            </button>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden fixed flex flex-col gap-y-8 justify-center items-center top-0 left-0 bg-gray-600/80 h-0 w-full transition-all delay-75">
          {navLinks.map((nav) => (
            <button onClick={() => setShowNav(false)}>
              <a
                href={nav.href}
                className={`tracking-wider text-2xl shadow ${
                  currentPath === nav.href ? "text-accent" : "text-white"
                }`}
              >
                {nav.name}
              </a>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
