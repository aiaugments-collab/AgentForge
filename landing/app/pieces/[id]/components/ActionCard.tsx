'use client';

import { type Piece } from '../../data/piecesData';
import { type PieceAction } from '../data/pieceDetails';

interface ActionCardProps {
  action: PieceAction;
  piece: Piece;
  isExpanded: boolean;
  onToggle: () => void;
  type: 'trigger' | 'action';
}

const getPropertyIcon = (type: string) => {
  switch (type) {
    case 'text':
      return '/props-icons/text.svg';
    case 'checkbox':
      return '/props-icons/checkbox.svg';
    case 'number':
      return '/props-icons/number.svg';
    case 'dropdown':
      return '/props-icons/dropdown.svg';
    default:
      return '/props-icons/text.svg';
  }
};

const getPropertyTitle = (type: string) => {
  switch (type) {
    case 'text':
      return 'Short text';
    case 'checkbox':
      return 'Checkbox';
    case 'number':
      return 'Number';
    case 'dropdown':
      return 'Dropdown';
    default:
      return 'Short text';
  }
};

export default function ActionCard({ action, piece, isExpanded, onToggle, type }: ActionCardProps) {
  const flowUrl = type === 'trigger' 
    ? `/flow/${piece.id}/${action.id}/any/any`
    : `/flow/any/any/${piece.id}/${action.id}`;

  return (
    <div className="bg-white rounded-lg shadow pt-4">
      {/* Header */}
      <div 
        className="group px-6 pb-4 flex gap-4 border-b items-center bg-white cursor-pointer"
        onClick={onToggle}
      >
        <img 
          src={piece.logoUrl} 
          alt={piece.displayName}
          className="w-10 h-10"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/api/placeholder/40/40';
          }}
        />
        
        <div className="w-full">
          <h4 className="font-bold text-md text-black">{action.name}</h4>
          <p className="text-gray-500 group-hover:text-black">{action.description}</p>
        </div>
        
        <svg 
          className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" 
          height="24" 
          viewBox="0 -960 960 960" 
          width="24"
        >
          <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
      </div>

      {/* Expanded Properties */}
      {isExpanded && (
        <div className="px-6 py-4 border-b border-gray-200">
          {action.properties.map((property, index) => (
            <div key={index} className="flex gap-3 items-center my-2">
              <img 
                src={getPropertyIcon(property.type)} 
                title={getPropertyTitle(property.type)}
                className="fill-black stroke-black w-6 h-6"
                alt={getPropertyTitle(property.type)}
              />
              <span className="font-semibold">{property.name}</span>
              {property.required && (
                <span className="inline py-[1px] px-2 bg-gray-100 text-gray-500 rounded-lg text-sm">
                  Required
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <a 
        href={flowUrl} 
        className="group flex justify-between px-6 py-4 text-right font-bold text-black hover:text-primary-500"
      >
        <div>
          {action.isInstant && (
            <span className="bg-gray-200 group-hover:bg-primary-100 text-gray-900 font-normal py-1 px-3 text-sm rounded-full flex items-center gap-1">
              <img src="/instant-trigger.svg" className="w-4 h-4" alt="Instant" />
              Instant
            </span>
          )}
        </div>
        
        <span>
          Try it{' '}
          <svg 
            className="inline-block group-hover:fill-primary-500" 
            xmlns="http://www.w3.org/2000/svg" 
            height="24" 
            viewBox="0 -960 960 960" 
            width="24"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
          </svg>
        </span>
      </a>
    </div>
  );
}
