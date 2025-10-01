'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href?: string;
  icon?: string;
  children?: NavItem[];
}

const navigationData: NavItem[] = [
  {
    title: 'Getting Started',
    children: [
      { title: 'What is Activepieces?', href: '/docs/getting-started/introduction', icon: '🤔' },
      { title: 'Product Principles', href: '/docs/getting-started/principles', icon: '🚀' },
    ],
  },
  {
    title: 'AI',
    children: [
      { title: 'MCP', href: '/docs/ai/mcp', icon: '🔗' },
    ],
  },
  {
    title: 'Flows',
    children: [
      { title: 'Building Flows', href: '/docs/flows/building-flows', icon: '🔨' },
      { title: 'Passing Data', href: '/docs/flows/passing-data', icon: '🔄' },
      { title: 'Publishing Flows', href: '/docs/flows/publishing-flows', icon: '📤' },
      { title: 'Debugging Runs', href: '/docs/flows/debugging-runs', icon: '🐛' },
      { title: 'Versioning', href: '/docs/flows/versioning', icon: '📋' },
      { title: 'Known Limits', href: '/docs/flows/known-limits', icon: '⚠️' },
    ],
  },
  {
    title: 'Platform Admin',
    children: [
      { title: 'Overview', href: '/docs/admin-console/overview', icon: '📊' },
      { title: 'Appearance', href: '/docs/admin-console/appearance', icon: '🎨' },
      { title: 'Manage Projects', href: '/docs/admin-console/manage-projects', icon: '📁' },
      { title: 'Custom Domain', href: '/docs/admin-console/custom-domain', icon: '🌐' },
      { title: 'Manage Templates', href: '/docs/admin-console/manage-templates', icon: '📝' },
      { title: 'Manage Pieces', href: '/docs/admin-console/manage-pieces', icon: '🧩' },
      { title: 'Manage OAuth2', href: '/docs/admin-console/manage-oauth2', icon: '🔐' },
      { title: 'Customize Emails', href: '/docs/admin-console/customize-emails', icon: '📧' },
    ],
  },
];

export default function DocsNavigation() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Getting Started',
    'AI', 
    'Flows',
    'Platform Admin'
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(s => s !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-80 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-6">
        <div className="space-y-1">
          {navigationData.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <span>{section.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections.includes(section.title) ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {expandedSections.includes(section.title) && section.children && (
                <div className="ml-4 mt-1 space-y-1">
                  {section.children.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href!}
                      className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive(item.href!)
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
