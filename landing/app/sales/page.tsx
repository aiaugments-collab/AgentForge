import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import SalesHeader from './components/SalesHeader';
import SalesContent from './components/SalesContent';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationHeader />
      
      <main>
        <section className="bg-white dark:bg-gray-900 my-16">
          <div className="px-4 mx-auto max-w-screen-xl sm:px-8 lg:px-10">
            <SalesHeader />
            <SalesContent />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
