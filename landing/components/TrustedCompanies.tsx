import React from 'react';

export default function TrustedCompanies() {
  return (
    <section className="py-16 dark:bg-gray-900 mx-auto overflow-hidden relative z-10 mt-16">
      <h2 className="mb-16 text-3xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
        Trusted by companies from startups to Fortune 50
      </h2>
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
        
        {/* Scrolling logos */}
        <div className="flex animate-scroll items-center space-x-16 w-max">
          {/* First set of logos */}
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">Red Bull</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">Rakuten</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">Contentful</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">ROBLOX</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">ClickUp</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">alan</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">DocuSign</span>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">Red Bull</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">Rakuten</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">Contentful</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">ROBLOX</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">ClickUp</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">alan</span>
          </div>
          <div className="relative h-8 flex items-center">
            <span className="text-2xl font-bold text-gray-400 tracking-wide">DocuSign</span>
          </div>
        </div>
        
        {/* Right gradient fade */}
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
