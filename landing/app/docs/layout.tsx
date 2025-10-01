import DocsNavbar from './components/DocsNavbar';
import DocsSidebar from './components/DocsSidebar';
import DocsNavigationTabs from './components/DocsNavigationTabs';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative antialiased text-gray-500 dark:text-gray-400">
      {/* Navbar */}
      <DocsNavbar />
      
      {/* Navigation Tabs */}
      <DocsNavigationTabs />
      
      {/* Main Content Container */}
      <div className="peer-[.is-not-center]:max-w-8xl peer-[.is-center]:max-w-3xl peer-[.is-not-custom]:px-4 peer-[.is-not-custom]:mx-auto peer-[.is-not-custom]:lg:px-8 peer-[.is-wide]:[&>div:last-child]:max-w-6xl peer-[.is-custom]:contents">
        {/* Sidebar */}
        <DocsSidebar />
        
        {/* Content Area */}
        <div className="relative grow box-border flex-col w-full mx-auto px-6 lg:pl-[25rem] lg:-ml-12 xl:w-[calc(100%-28rem)]" id="content-area">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
