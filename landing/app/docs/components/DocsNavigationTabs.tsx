'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavTab {
  name: string;
  href: string;
}

const navigationTabs: NavTab[] = [
  { name: 'Documentation', href: '/docs/getting-started/introduction' },
  { name: 'Develop Pieces', href: '/docs/developers/building-pieces/overview' },
  { name: 'Embedding', href: '/docs/embedding/overview' },
  { name: 'API Reference', href: '/docs/endpoints/overview' },
  { name: 'Deploy', href: '/docs/install/overview' },
  { name: 'Handbook', href: '/docs/handbook/overview' },
];

export default function DocsNavigationTabs() {
  const pathname = usePathname();

  const isActiveTab = (href: string) => {
    // Check if current path starts with the tab's base path
    const basePath = href.split('/').slice(0, 3).join('/'); // e.g., '/docs/getting-started'
    const currentBasePath = pathname.split('/').slice(0, 3).join('/');
    return currentBasePath === basePath;
  };

  return (
    <div className="sticky top-16 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-12 h-12">
      <div className="nav-tabs h-full flex text-sm sm:text-base lg:text-lg gap-x-4 sm:gap-x-6 lg:gap-x-8 overflow-x-auto scrollbar-hide">
        {navigationTabs.map((tab) => {
          const isActive = isActiveTab(tab.href);
          
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`link nav-tabs-item group relative h-full gap-2 flex items-center hover:text-gray-800 dark:hover:text-gray-300 focus:outline-primary dark:focus:outline-primary-light whitespace-nowrap ${
                isActive
                  ? 'text-gray-800 dark:text-gray-200 font-semibold'
                  : 'font-medium text-gray-600 dark:text-gray-400'
              }`}
            >
              {tab.name}
              <div
                className={`absolute bottom-0 h-[1.5px] w-full ${
                  isActive
                    ? 'bg-primary dark:bg-primary-light'
                    : 'group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
