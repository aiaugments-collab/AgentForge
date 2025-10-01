'use client';

import { useState } from 'react';
import PiecesGrid from './PiecesGrid';
import MobileFilters from './MobileFilters';

export default function PiecesContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('UPDATED');

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full">
      <div className="py-8 px-6 mx-auto max-w-screen-xl">
        {/* Search Input */}
        <input
          className="appearance-none mb-4 block w-full bg-white text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:ring-0 focus:outline-none focus:bg-white focus:border-primary-500"
          type="text"
          placeholder="Search pieces"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Mobile Filters */}
        <MobileFilters />

        {/* Results Header */}
        <div className="flex justify-between mb-8 items-center">
          <p className="font-normal text-gray-500 text-normal text-left">
            <span>Showing 52 pieces</span>
          </p>
          <div>
            Sort by{' '}
            <select
              className="ms-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="NAME">A to Z</option>
              <option value="UPDATED">Last updated</option>
              <option value="CREATED">Last created</option>
              <option value="POPULARITY">Popularity</option>
            </select>
          </div>
        </div>

        {/* Pieces Grid */}
        <PiecesGrid searchTerm={searchTerm} sortBy={sortBy} />
      </div>
    </section>
  );
}
