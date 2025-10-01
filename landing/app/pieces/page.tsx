import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import PiecesHeader from './components/PiecesHeader';
import PiecesFilters from './components/PiecesFilters';
import PiecesContent from './components/PiecesContent';

export default function PiecesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationHeader />
      
      <main>
        <section className="bg-white dark:bg-gray-900 my-16">
          <PiecesHeader />
          
          <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
            <PiecesFilters />
            <PiecesContent />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
