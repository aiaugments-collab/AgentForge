'use client';

import { type Piece } from '../../data/piecesData';

interface PieceHeaderProps {
  piece: Piece;
}

export default function PieceHeader({ piece }: PieceHeaderProps) {
  return (
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <img 
        src={piece.logoUrl} 
        alt={piece.displayName}
        className="inline-block mb-6 w-[80px] h-[80px]"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/api/placeholder/80/80';
        }}
      />
      
      <h2 className="mb-4 text-5xl tracking-tight font-bold text-gray-900 dark:text-white">
        {piece.displayName} Integrations
      </h2>
      
      <p className="mb-10 text-xl tracking-tight font-normal text-gray-500">
        Activepieces lets you connect {piece.displayName} with the most popular apps, 
        so you can automate your work and have more time for what matters most - no code required.
      </p>
      
      <a 
        href="https://cloudagent.augment.cfd/sign-up" 
        className="mt-10 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-normal rounded-lg text-xl px-10 py-4 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        Start free
      </a>
    </div>
  );
}
