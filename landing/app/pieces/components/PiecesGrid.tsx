'use client';

import { useMemo } from 'react';
import { piecesData, type Piece } from '../data/piecesData';
import PieceCard from './PieceCard';

interface PiecesGridProps {
  searchTerm: string;
  sortBy: string;
}

export default function PiecesGrid({ searchTerm, sortBy }: PiecesGridProps) {
  const filteredAndSortedPieces = useMemo(() => {
    let filtered = piecesData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(piece =>
        piece.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        piece.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        piece.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort pieces
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'NAME':
          return a.displayName.localeCompare(b.displayName);
        case 'CREATED':
        case 'UPDATED':
        case 'POPULARITY':
        default:
          // For demo purposes, we'll just use the order in the array
          return 0;
      }
    });

    return sorted;
  }, [searchTerm, sortBy]);

  return (
    <div className="w-full">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        {filteredAndSortedPieces.map((piece) => (
          <PieceCard key={piece.id} piece={piece} />
        ))}
      </div>
      
      {filteredAndSortedPieces.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No pieces found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
