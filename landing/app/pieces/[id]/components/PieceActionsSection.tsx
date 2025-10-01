'use client';

import { useState } from 'react';
import { type Piece } from '../../data/piecesData';
import { getPieceDetails } from '../data/pieceDetails';
import ActionCard from './ActionCard';

interface PieceActionsProps {
  piece: Piece;
}

export default function PieceActionsSection({ piece }: PieceActionsProps) {
  const details = getPieceDetails(piece.id);
  const [expandedAction, setExpandedAction] = useState<string | null>(null);

  const toggleAction = (actionId: string) => {
    setExpandedAction(expandedAction === actionId ? null : actionId);
  };

  if (details.actions.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-screen-xl p-8 lg:p-16">
      <h3 className="text-center text-4xl font-bold w-full flex justify-center gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44">
          <path d="M80-480v-80h120v80H80Zm136 222-56-58 84-84 58 56-86 86Zm28-382-84-84 56-58 86 86-58 56Zm476 480L530-350l-50 150-120-400 400 120-148 52 188 188-80 80ZM400-720v-120h80v120h-80Zm236 80-58-56 86-86 56 56-84 86Z"></path>
        </svg>
        <span>{piece.displayName} Actions</span>
      </h3>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 space-x-0 space-y-6 md:space-x-6 md:space-y-0">
        <div className="flex flex-col gap-6">
          {details.actions.filter((_, index) => index % 2 === 0).map((action) => (
            <ActionCard
              key={action.id}
              action={action}
              piece={piece}
              isExpanded={expandedAction === action.id}
              onToggle={() => toggleAction(action.id)}
              type="action"
            />
          ))}
        </div>
        
        <div className="flex flex-col gap-6">
          {details.actions.filter((_, index) => index % 2 === 1).map((action) => (
            <ActionCard
              key={action.id}
              action={action}
              piece={piece}
              isExpanded={expandedAction === action.id}
              onToggle={() => toggleAction(action.id)}
              type="action"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
