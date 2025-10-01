
import PricingHeader from './components/PricingHeader';
import NavigationHeader from '@/components/NavigationHeader';
import Footer from '@/components/Footer';
import PricingTabs from './components/PricingTabs';
import PricingCards from './components/PricingCards';
import PricingBottom from './components/PricingBottom';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationHeader />
      
      <main>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-6 w-full lg:py-16 px-4 lg:px-6">
            <PricingHeader />
            <PricingTabs />
            <PricingCards />
            <PricingBottom />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
