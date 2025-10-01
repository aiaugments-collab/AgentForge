import { type Piece } from '../data/piecesData';

interface PieceCardProps {
  piece: Piece;
}

export default function PieceCard({ piece }: PieceCardProps) {
  return (
    <a
      href={`/pieces/${piece.id}`}
      className="flex flex-col justify-between p-6 transition duration-200 shadow hover:shadow-md hover:-translate-y-[2px] bg-white rounded dark:bg-gray-800"
    >
      {/* Premium Badge Tooltip (hidden by default) */}
      {piece.isPremium && (
        <div className="absolute visible inline-block z-10 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg tooltip opacity-0">
          Requires a special license
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-row md:flex-col lg:flex-row gap-4 lg:items-center">
        <img
          src={piece.logoUrl}
          alt={piece.displayName}
          className="w-12 h-12"
          onError={(e) => {
            // Fallback to a default image if the logo fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/api/placeholder/48/48';
          }}
        />
        
        <div className="w-full">
          <div className="flex row justify-between items-center">
            <h3 className="text-lg font-bold dark:text-white">
              {piece.displayName}
            </h3>
            
            {piece.isPremium && (
              <span className="flex cursor-default gap-0 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                Premium
              </span>
            )}
          </div>
          
          {piece.description && (
            <p className="hidden md:block font-light text-gray-500 dark:text-gray-400 mt-[4px]">
              {piece.description}
            </p>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 flex w-full justify-between border-t border-gray-200 pt-3">
        <div className="flex justify-start gap-2.5 items-center">
          <div className="text-sm text-gray-500">Contributors</div>
          <div className="flex gap-1.5">
            {piece.authors.slice(0, 3).map((author, index) => (
              <div key={author}>
                <img
                  src={`https://github.com/${author}.png?size=48`}
                  alt={`@${author}`}
                  className="w-6 h-6 bg-violet-100 rounded-full cursor-default opacity-80"
                  title={`@${author}`}
                  onError={(e) => {
                    // Fallback to a default avatar if GitHub image fails
                    const target = e.target as HTMLImageElement;
                    target.src = '/api/placeholder/24/24';
                  }}
                />
              </div>
            ))}
            {piece.authors.length > 3 && (
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
                +{piece.authors.length - 3}
              </div>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          {piece.updated}
        </div>
      </div>
    </a>
  );
}
