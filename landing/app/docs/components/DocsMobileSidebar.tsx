'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  id: string;
  title: string;
  href: string;
  icon: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface DocsMobileSidebarProps {
  navigationData: NavGroup[];
}

export default function DocsMobileSidebar({ navigationData }: DocsMobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle docs navigation"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Sidebar Panel */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Documentation</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-6">
                  {navigationData.map((group, groupIndex) => (
                    <div key={group.title}>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        {group.title}
                      </h3>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                                isActive(item.href)
                                  ? 'bg-primary/10 text-primary font-semibold dark:text-primary-light dark:bg-primary-light/10'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <svg
                                className={`h-4 w-4 ${
                                  isActive(item.href)
                                    ? 'text-primary dark:text-primary-light'
                                    : 'text-gray-400 dark:text-gray-500'
                                }`}
                                style={{
                                  WebkitMaskImage: `url(https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/regular/${item.icon}.svg)`,
                                  WebkitMaskRepeat: 'no-repeat',
                                  WebkitMaskPosition: 'center',
                                  maskImage: `url(https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/regular/${item.icon}.svg)`,
                                  maskRepeat: 'no-repeat',
                                  maskPosition: 'center'
                                }}
                              />
                              <span className="text-sm">{item.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
