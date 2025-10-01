'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { APP_NAME } from '@/lib/constants';

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

const getNavigationData = (pathname: string): NavGroup[] => {
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

export default function DocsSidebar() {
  const pathname = usePathname();
  const navigationData = getNavigationData(pathname);

  const isActive = (href: string) => pathname === href;

  return (
    <div className="z-20 hidden lg:block fixed bottom-0 right-auto w-[18rem]" id="sidebar" style={{ top: '10rem' }}>
      <div className="absolute inset-0 z-10 stable-scrollbar-gutter overflow-auto pr-8 pb-10" id="sidebar-content">
        <div className="relative lg:text-sm lg:leading-6">
          <div className="sticky top-0 h-8 z-10 bg-gradient-to-b from-background-light dark:from-background-dark"></div>
          
          <div id="navigation-items">
            {navigationData.map((group, groupIndex) => (
              <div key={group.title} className={groupIndex > 0 ? 'mt-6 lg:mt-8' : ''}>
                <div className="sidebar-group-header flex items-center gap-2.5 pl-4 mb-3.5 lg:mb-2.5 font-semibold text-lg text-gray-900 dark:text-gray-200">
                  <h5 id="sidebar-title">{group.title}</h5>
                </div>
                
                <ul id="sidebar-group">
                  {group.items.map((item) => (
                    <li 
                      key={item.id}
                      id={item.id}
                      className="relative scroll-m-4 first:scroll-m-20"
                      data-title={item.title}
                    >
                      <Link
                        className={`group flex items-center pr-3 py-1.5 cursor-pointer focus:outline-primary dark:focus:outline-primary-light gap-x-3 text-left rounded-xl w-full ${
                          isActive(item.href)
                            ? 'bg-primary/10 text-primary font-semibold dark:text-primary-light dark:bg-primary-light/10'
                            : 'hover:bg-gray-600/5 dark:hover:bg-gray-200/5 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                        }`}
                        style={{ paddingLeft: '1rem' }}
                        href={item.href}
                      >
                        <svg
                          className={`h-4 w-4 ${
                            isActive(item.href)
                              ? 'bg-primary dark:bg-primary-light'
                              : 'bg-gray-400 dark:bg-gray-500'
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
                        <div className="flex-1 flex items-center space-x-2.5">
                          <div className="text-base">{item.title}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
