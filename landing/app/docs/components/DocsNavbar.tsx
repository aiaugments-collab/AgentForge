'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { APP_NAME } from '@/lib/constants';
import DocsMobileSidebar from './DocsMobileSidebar';

// Navigation data logic (same as DocsSidebar)
const getNavigationData = (pathname: string) => {
  const basePath = pathname.split('/')[2]; // e.g., 'getting-started', 'developers', etc.
  
  switch (basePath) {
    case 'getting-started':
      return [
        {
          title: 'Getting Started',
          items: [
            {
              id: '/getting-started/introduction',
              title: `What is ${APP_NAME}?`,
              href: '/docs/getting-started/introduction',
              icon: 'hand-wave'
            },
            {
              id: '/getting-started/principles',
              title: 'Product Principles',
              href: '/docs/getting-started/principles',
              icon: 'pen-nib'
            }
          ]
        },
        {
          title: 'AI',
          items: [
            {
              id: '/ai/mcp',
              title: 'MCP',
              href: '/docs/ai/mcp',
              icon: 'brain'
            }
          ]
        },
        {
          title: 'Flows',
          items: [
            {
              id: '/flows/building-flows',
              title: 'Building Flows',
              href: '/docs/flows/building-flows',
              icon: 'hammer'
            },
            {
              id: '/flows/passing-data',
              title: 'Passing Data',
              href: '/docs/flows/passing-data',
              icon: 'wand-sparkles'
            },
            {
              id: '/flows/publishing-flows',
              title: 'Publishing Flows',
              href: '/docs/flows/publishing-flows',
              icon: 'bolt'
            },
            {
              id: '/flows/debugging-runs',
              title: 'Debugging Runs',
              href: '/docs/flows/debugging-runs',
              icon: 'bug'
            },
            {
              id: '/flows/versioning',
              title: 'Version History',
              href: '/docs/flows/versioning',
              icon: 'clock-rotate-left'
            },
            {
              id: '/flows/known-limits',
              title: 'Technical Limits',
              href: '/docs/flows/known-limits',
              icon: 'triangle-exclamation'
            }
          ]
        }
      ];
    
    case 'developers':
      return [
        {
          title: 'Building Pieces',
          items: [
            {
              id: '/developers/building-pieces/overview',
              title: 'Overview',
              href: '/docs/developers/building-pieces/overview',
              icon: 'shapes'
            },
            {
              id: '/developers/building-pieces/setup-fork',
              title: 'Setup Fork',
              href: '/docs/developers/building-pieces/setup-fork',
              icon: 'code-branch'
            },
            {
              id: '/developers/building-pieces/start-building',
              title: 'Start Building',
              href: '/docs/developers/building-pieces/start-building',
              icon: 'hammer'
            },
            {
              id: '/developers/building-pieces/create-trigger',
              title: 'Create Trigger',
              href: '/docs/developers/building-pieces/create-trigger',
              icon: 'bolt'
            },
            {
              id: '/developers/building-pieces/create-action',
              title: 'Create Action',
              href: '/docs/developers/building-pieces/create-action',
              icon: 'play'
            }
          ]
        },
        {
          title: 'Development Setup',
          items: [
            {
              id: '/developers/development-setup/getting-started',
              title: 'Getting Started',
              href: '/docs/developers/development-setup/getting-started',
              icon: 'rocket'
            },
            {
              id: '/developers/development-setup/local',
              title: 'Local Development',
              href: '/docs/developers/development-setup/local',
              icon: 'computer'
            }
          ]
        }
      ];
    
    case 'embedding':
      return [
        {
          title: 'Embedding',
          items: [
            {
              id: '/embedding/overview',
              title: 'Overview',
              href: '/docs/embedding/overview',
              icon: 'embed'
            },
            {
              id: '/embedding/embed-builder',
              title: 'Embed Builder',
              href: '/docs/embedding/embed-builder',
              icon: 'code'
            },
            {
              id: '/embedding/embed-connections',
              title: 'Embed Connections',
              href: '/docs/embedding/embed-connections',
              icon: 'link'
            }
          ]
        }
      ];
    
    case 'endpoints':
      return [
        {
          title: 'API Reference',
          items: [
            {
              id: '/endpoints/overview',
              title: 'Overview',
              href: '/docs/endpoints/overview',
              icon: 'api'
            },
            {
              id: '/endpoints/flows',
              title: 'Flows',
              href: '/docs/endpoints/flows/schema',
              icon: 'flow'
            },
            {
              id: '/endpoints/connections',
              title: 'Connections',
              href: '/docs/endpoints/connections/schema',
              icon: 'link'
            }
          ]
        }
      ];
    
    case 'install':
      return [
        {
          title: 'Deploy',
          items: [
            {
              id: '/install/overview',
              title: 'Overview',
              href: '/docs/install/overview',
              icon: 'server'
            },
            {
              id: '/install/architecture',
              title: 'Architecture',
              href: '/docs/install/architecture/overview',
              icon: 'sitemap'
            }
          ]
        }
      ];
    
    case 'handbook':
      return [
        {
          title: 'Handbook',
          items: [
            {
              id: '/handbook/overview',
              title: 'Overview',
              href: '/docs/handbook/overview',
              icon: 'book'
            },
            {
              id: '/handbook/engineering',
              title: 'Engineering',
              href: '/docs/handbook/engineering/overview',
              icon: 'cog'
            }
          ]
        }
      ];
    
    default:
      // Default to getting started navigation
      return [
        {
          title: 'Getting Started',
          items: [
            {
              id: '/getting-started/introduction',
              title: `What is ${APP_NAME}?`,
              href: '/docs/getting-started/introduction',
              icon: 'hand-wave'
            },
            {
              id: '/getting-started/principles',
              title: 'Product Principles',
              href: '/docs/getting-started/principles',
              icon: 'pen-nib'
            }
          ]
        }
      ];
  }
};

export default function DocsNavbar() {
  const [isOpaque, setIsOpaque] = useState(false);
  const pathname = usePathname();
  const navigationData = getNavigationData(pathname);

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
                
                {/* Mobile Menu Button */}
                <DocsMobileSidebar navigationData={navigationData} />

                {/* Logo */}
                <div className="flex-1 flex items-center gap-x-4">
                  <Link 
                    className="focus:outline-primary dark:focus:outline-primary-light" 
                    href="/"
                  >
                    <span className="sr-only">{APP_NAME} home page</span>
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
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

                {/* Mobile Search Button */}
                <div className="lg:hidden">
                  <button
                    type="button"
                    className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
                    aria-label="Open search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
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
