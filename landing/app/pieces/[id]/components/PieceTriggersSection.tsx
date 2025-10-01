'use client';

import { useState } from 'react';
import { type Piece } from '../../data/piecesData';
import { getPieceDetails } from '../data/pieceDetails';
import ActionCard from './ActionCard';

interface PieceTriggersProps {
  piece: Piece;
}

export default function PieceTriggersSection({ piece }: PieceTriggersProps) {
  const details = getPieceDetails(piece.id);
  const [expandedTrigger, setExpandedTrigger] = useState<string | null>(null);

  const toggleTrigger = (triggerId: string) => {
    setExpandedTrigger(expandedTrigger === triggerId ? null : triggerId);
  };

  if (details.triggers.length === 0) {
    return null;
  }

  return (
    <div className="mt-24 w-full bg-gray-50">
      <div className="mx-auto max-w-screen-xl p-8 lg:p-16">
        <h3 className="text-center text-4xl font-bold w-full flex justify-center gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44">
            <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Z"></path>
          </svg>
          <span>{piece.displayName} Triggers</span>
        </h3>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 space-x-0 space-y-6 md:space-x-6 md:space-y-0">
          <div className="flex flex-col gap-6">
            {details.triggers.filter((_, index) => index % 2 === 0).map((trigger) => (
              <ActionCard
                key={trigger.id}
                action={trigger}
                piece={piece}
                isExpanded={expandedTrigger === trigger.id}
                onToggle={() => toggleTrigger(trigger.id)}
                type="trigger"
              />
            ))}
          </div>
          
          <div className="flex flex-col gap-6">
            {details.triggers.filter((_, index) => index % 2 === 1).map((trigger) => (
              <ActionCard
                key={trigger.id}
                action={trigger}
                piece={piece}
                isExpanded={expandedTrigger === trigger.id}
                onToggle={() => toggleTrigger(trigger.id)}
                type="trigger"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
