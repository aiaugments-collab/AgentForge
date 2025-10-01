import { notFound } from 'next/navigation';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import { piecesData } from '../data/piecesData';
import PieceHeader from './components/PieceHeader';
import PieceTriggersSection from './components/PieceTriggersSection';
import PieceActionsSection from './components/PieceActionsSection';

interface PiecePageProps {
  params: {
    id: string;
  };
}

export default function PiecePage({ params }: PiecePageProps) {
  const piece = piecesData.find(p => p.id === params.id);

  if (!piece) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationHeader />
      
      <main>
        <section className="bg-white dark:bg-gray-900 my-16">
          <PieceHeader piece={piece} />
          <PieceTriggersSection piece={piece} />
          <PieceActionsSection piece={piece} />
        </section>
      </main> 

      <Footer />
    </div>
  );
}

// Generate static params for all pieces
export async function generateStaticParams() {
  return piecesData.map((piece) => ({
    id: piece.id,
  }));
}
