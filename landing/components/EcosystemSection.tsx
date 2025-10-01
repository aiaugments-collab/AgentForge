'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ProductTab {
  id: string;
  number: string;
  title: string;
  description: string;
  videoSrc: string;
  gradient: string;
  color: string;
}

const productTabs: ProductTab[] = [
  {
    id: 'agents',
    number: '01',
    title: 'Agents',
    description: 'AI Agents that can think and act. They can access 431 tools and collaborate with humans. Your dream agentic team!',
    videoSrc: 'https://www.activepieces.com/products/agents.mp4',
    gradient: 'linear-gradient(135deg, #fffafd 0%, #fffef5 100%)',
    color: 'rgb(225, 29, 72)'
  },
  {
    id: 'flows',
    number: '02',
    title: 'Flows',
    description: 'No-code automation with AI and 431 pieces. The easiest canvas to orchestrate your agents and apps altogether.',
    videoSrc: 'https://www.activepieces.com/products/flows.mp4',
    gradient: 'linear-gradient(135deg, #f0f7ff 0%, #e6fff7 100%)',
    color: 'rgb(59, 130, 246)'
  },
  {
    id: 'tables',
    number: '03',
    title: 'Tables',
    description: 'Like Google Sheets, but deeply connected to your agents and automations. The central datastore to put your work on autopilot.',
    videoSrc: 'https://www.activepieces.com/products/tables.mp4',
    gradient: 'linear-gradient(135deg, #f9f9ff 0%, #f7fff0 100%)',
    color: 'rgb(34, 197, 94)'
  },
  {
    id: 'mcps',
    number: '04',
    title: 'MCPs',
    description: 'Our 431 pieces can be used as tools to your external agents like Claude or Cursor. We manage the connection for you.',
    videoSrc: 'https://www.activepieces.com/products/mcps.mp4',
    gradient: 'linear-gradient(135deg, #f8f6ff 0%, #f0f7ff 100%)',
    color: 'rgb(147, 51, 234)'
  },
  {
    id: 'todos',
    number: '05',
    title: 'Todos',
    description: 'Humans will always be in the loop. Agents and flows can request approvals from humans, including the back and forth.',
    videoSrc: 'https://www.activepieces.com/products/todos.mp4',
    gradient: 'linear-gradient(135deg, #fffaf7 0%, #fff7fa 100%)',
    color: 'rgb(236, 72, 153)'
  }
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState('agents');
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProduct = productTabs.find(tab => tab.id === activeTab) || productTabs[0];

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which section is currently in view
      for (const tab of productTabs) {
        const element = sectionRefs.current[tab.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle manual tab clicks
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = sectionRefs.current[tabId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="max-w-screen-xl mx-10 pt-16 md:pt-40 pb-24 px-4 md:px-0">
      <div className="px-0 md:px-8">
        <h2 className="font-libre-baskerville text-[2.75rem] md:text-[3.3rem] font-light leading-tight tracking-tight text-gray-900 dark:text-white mb-8 md:mb-16 text-left">
          The full AI automation and agents ecosystem
        </h2>
      </div>

      {/* Mobile sticky navigation */}
      <div className="sticky top-[62px] z-20 bg-white border-b border-gray-100 md:hidden overflow-x-auto px-4 gap-8 h-12 hide-scrollbar flex items-center">
        {productTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center transition whitespace-nowrap ${
              activeTab === tab.id 
                ? 'font-medium text-gray-900' 
                : 'font-normal text-gray-400'
            }`}
          >
            {activeTab === tab.id && (
              <span 
                className="inline-block w-3 h-3 rounded-[4px] mr-3"
                style={{ backgroundColor: tab.color }}
              />
            )}
            <span>{tab.number} {tab.title}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-0 md:gap-8 items-start px-0 md:px-8">
        {/* Desktop sidebar navigation */}
        <nav className="w-1/4 min-w-[180px] max-w-[220px] sticky top-32 self-start space-y-0 pt-2 hidden md:flex md:flex-col">
          <ul className="flex flex-col">
            {productTabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className="flex items-center w-full py-3 px-0 text-left text-lg md:text-xl font-normal text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group focus:outline-none"
                  aria-current={activeTab === tab.id}
                >
                  <span className="w-3 h-3 mr-3 flex items-center justify-center">
                    <span 
                      className="block w-3 h-3 rounded-[4px]"
                      style={{ 
                        backgroundColor: activeTab === tab.id 
                          ? tab.color 
                          : 'rgb(229, 231, 235)' 
                      }}
                    />
                  </span>
                  <span className={activeTab === tab.id ? 'font-semibold text-black dark:text-white' : ''}>
                    {tab.number} {tab.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content area */}
        <div className="w-full md:w-3/4 pl-0" ref={containerRef}>
          {productTabs.map((product) => (
            <div 
              key={product.id}
              ref={(el) => { sectionRefs.current[product.id] = el; }}
              className="mb-12 md:mb-32 scroll-mt-32"
            >
              <div 
                className="flex flex-col relative overflow-hidden"
                style={{ backgroundImage: product.gradient }}
              >
              <div className="relative z-10">
                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-0 relative">
                  <div className="relative flex-1 py-3">
                    {/* Border decorations */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-0 border-t border-black pointer-events-none"
                      style={{ width: '4000px', marginLeft: '-2000px' }}
                    />
                    <div 
                      className="absolute top-0 bottom-0 left-0 w-0 border-l border-black pointer-events-none"
                      style={{ height: '4000px', marginTop: '-2000px' }}
                    />
                    
                    <h3 className="text-[1.75rem] md:text-[2rem] font-bold text-gray-900 pl-3">
                      {product.title}
                    </h3>
                    <div className="w-full border-t border-black my-2" />
                    <p className="text-lg md:text-xl text-black font-normal mt-2 text-balance pl-3">
                      {product.description}
                    </p>
                    
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-0 border-b border-black pointer-events-none"
                      style={{ width: '4000px', marginLeft: '-2000px' }}
                    />
                  </div>

                  {/* CTA Button */}
                  <div 
                    className="relative flex-shrink-0 flex flex-col min-w-[160px] md:min-w-[180px]"
                    style={{ minHeight: '64px' }}
                  >
                    <div className="flex flex-row items-stretch h-full justify-center">
                      <div className="absolute top-0 left-0 bottom-0 w-px border-l border-black" />
                      <a
                        href="https://cloud.activepieces.com/sign-up"
                        target="_blank"
                        rel="noopener"
                        className="bg-gray-900 text-white rounded-xl px-6 py-3 font-semibold shadow hover:bg-gray-800 transition whitespace-nowrap my-4 md:my-auto ml-0"
                      >
                        Start free
                      </a>
                      <div className="absolute bottom-0 left-0 w-full border-t border-black block md:hidden" />
                    </div>
                  </div>
                </div>

                {/* Video section */}
                <div 
                  className="relative h-[400px] lg:h-[520px]"
                  style={{ marginLeft: '0', maxWidth: '100%' }}
                >
                  {/* Border decorations */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0 border-b border-black pointer-events-none z-10"
                    style={{ width: '4000px', marginLeft: '-2000px' }}
                  />
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-0 border-l border-black pointer-events-none z-10"
                    style={{ height: '4000px', marginTop: '-2000px' }}
                  />
                  <div 
                    className="absolute top-0 bottom-0 right-0 w-0 border-r border-black pointer-events-none z-10"
                    style={{ height: '4000px', marginTop: '-2000px' }}
                  />
                  
                  <div className="w-full h-full">
                    <video
                      src={product.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover z-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
