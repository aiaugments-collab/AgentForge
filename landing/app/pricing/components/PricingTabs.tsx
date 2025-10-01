'use client';

import { useState } from 'react';

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState('automate');

  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center justify-center">
        <div className="flex space-x-4 sm:space-x-8 relative overflow-x-auto max-w-full">
          <div 
            className="absolute bottom-0 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-100"
            style={{
              width: activeTab === 'automate' ? '157.594px' : '120px',
              left: activeTab === 'automate' ? '32px' : '220px',
              opacity: 1,
              transition: '0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          />
          
          <button
            onClick={() => setActiveTab('automate')}
            className={`relative px-4 py-3 tracking-[0.01em] cursor-pointer transition-all duration-300 focus-visible:outline-none flex gap-3 items-center group ${
              activeTab === 'automate' 
                ? 'text-black dark:text-white font-medium tracking-normal'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }} 
          >
            <div 
              className={`text-2xl transition-all duration-300 ${
                activeTab === 'automate' ? 'scale-110 transform' : 'group-hover:scale-105'
              }`}
              style={{ transition: activeTab === 'automate' ? 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              💎
            </div>
            <span className="text-lg font-medium">Automate</span>
          </button>
          
          <button
            onClick={() => setActiveTab('embed')}
            className={`relative px-4 py-3 tracking-[0.01em] cursor-pointer transition-all duration-300 focus-visible:outline-none flex gap-3 items-center group ${
              activeTab === 'embed' 
                ? 'text-black dark:text-white font-medium tracking-normal'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div 
              className={`text-2xl transition-all duration-300 ${
                activeTab === 'embed' ? 'scale-110 transform' : 'group-hover:scale-105'
              }`}
              style={{ transition: activeTab === 'embed' ? 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              🪝
            </div>
            <span className="text-lg font-medium">Embed</span>
          </button>
        </div>
      </div>
    </div>
  );
}
