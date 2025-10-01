import AnnouncementBanner from '../components/AnnouncementBanner';
import NavigationHeader from '../components/NavigationHeader';
import HeroSection from '../components/HeroSection';
import TrustedCompanies from '../components/TrustedCompanies';
import EcosystemSection from '../components/EcosystemSection';
import FeaturesSection from '../components/FeaturesSection';
import AppsSection from '../components/AppsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <NavigationHeader />
      <HeroSection />
      <TrustedCompanies />
      <EcosystemSection />
      <FeaturesSection />
      <AppsSection />
      <Footer />
    </div>
  );
}
