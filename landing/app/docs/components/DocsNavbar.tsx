'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

export default function DocsNavbar() {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpaque(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="navbar" className="z-30 fixed lg:sticky top-0 w-full peer is-not-custom peer is-not-center peer is-not-wide peer is-not-frame">
      <div 
        id="navbar-transition"
        className={`absolute w-full h-full backdrop-blur flex-none transition-colors duration-500 border-b border-gray-500/5 dark:border-gray-300/[0.06] ${
          isOpaque 
            ? 'bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75' 
            : 'supports-backdrop-blur:bg-background-light/60 dark:bg-transparent'
        }`}
        data-is-opaque={isOpaque}
      />
      
      <div className="max-w-8xl mx-auto relative">
        <div>
          <div className="relative">
            <div className="flex items-center lg:px-12 h-16 min-w-0 mx-4 lg:mx-0">
              <div className="h-full relative flex-1 flex items-center gap-x-4 min-w-0 border-b border-gray-500/5 dark:border-gray-300/[0.06]">
                
                {/* Logo */}
                <div className="flex-1 flex items-center gap-x-4">
                  <Link 
                    className="focus:outline-primary dark:focus:outline-primary-light" 
                    href="/"
                  >
                    <span className="sr-only">{APP_NAME} home page</span>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {APP_NAME}
                    </h1>
                  </Link>
                  <div className="hidden lg:flex items-center gap-x-2"></div>
                </div>

                {/* Search Bar */}
                <div className="relative hidden lg:flex items-center flex-1 justify-center">
                  <button
                    type="button"
                    className="flex pointer-events-auto rounded-xl w-full items-center text-base leading-6 h-10 pl-4 pr-3 shadow-sm text-gray-500 dark:text-white/50 bg-background-light dark:bg-background-dark dark:brightness-[1.1] dark:ring-1 dark:hover:brightness-[1.25] ring-1 ring-gray-400/20 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary justify-between truncate gap-2 min-w-[43px]"
                    id="search-bar-entry"
                    aria-label="Open search"
                  >
                    <div className="flex items-center gap-2 min-w-[42px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search min-w-4 flex-none text-gray-700 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                      <div className="truncate min-w-0">Search...</div>
                    </div>
                    <span className="flex-none text-xs font-semibold">Ctrl K</span>
                  </button>
                </div>

                {/* Right Navigation */}
                <div className="flex-1 relative hidden lg:flex items-center ml-auto justify-end space-x-4">
                  <nav className="text-base">
                    <ul className="flex space-x-6 items-center">
                      <li className="navbar-link">
                        <Link
                          href="/pieces"
                          className="flex items-center gap-1.5 whitespace-nowrap font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                          Pieces
                        </Link>
                      </li>
                      <li className="navbar-link">
                        <Link
                          href="/pricing"
                          className="flex items-center gap-1.5 whitespace-nowrap font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li className="block lg:hidden">
                        <Link
                          className="flex items-center gap-1.5 whitespace-nowrap font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                          href="/sales"
                        >
                          Get Started
                        </Link>
                      </li>
                      <li className="whitespace-nowrap hidden lg:flex" id="topbar-cta-button">
                        <Link
                          className="group px-4 py-1.5 relative inline-flex items-center text-sm font-medium"
                          href="/sales"
                        >
                          <span className="absolute inset-0 bg-primary-dark rounded-full group-hover:opacity-[0.9]"></span>
                          <div className="mr-0.5 space-x-2.5 flex items-center">
                            <span className="z-10 text-white">Get Started</span>
                            <svg
                              width="3"
                              height="24"
                              viewBox="0 -9 3 24"
                              className="h-5 rotate-0 overflow-visible text-white/90"
                            >
                              <path
                                d="M0 0L3 3L0 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Dark Mode Toggle */}
                  <div className="flex items-center">
                    <button
                      className="group p-2 flex items-center justify-center"
                      aria-label="Toggle dark mode"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <path d="M8 1v2M8 13v2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M1 8h2M13 8h2M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
