import { useRef } from 'react';
import Navbar from '../../components/navbar/Index';
import WebsiteOverview from '../../components/overview/WebOverview';
import Apparatus from '../../components/aparatus/Index';
import News from '../../components/news/Index';
import VillageMarket from '../../components/villageMarket/Index';
import VillageActivities from '../../components/villageActivities/Index';
import Footer from '../../components/footer';
import VillageMap from '../../components/villageArea';
import Header from '../../components/header';
import BackToTop from '../../components/_shared/backToTop';
import { useVillageActivities, useVillageNews, useVillageProfile, useVillageUMKM } from '../../hooks/useAPI';
import Loader from '../../components/_shared/loader';

export default function LandingPage() {
  const { profile, aparattus, boundaryData, loading, error } = useVillageProfile();
  const { news } = useVillageNews();  
  const { produkUMKM } = useVillageUMKM();
  const { activities } = useVillageActivities();
  
  const refs = {
    homeRef: useRef(null),
    apparatusRef: useRef(null),
    newsRef: useRef(null),
    marketRef: useRef(null),
    activitiesRef: useRef(null),
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar data={profile} scrollToSection={scrollToSection} refs={refs} />
      <div ref={refs.homeRef}><Header data={profile} /></div>
      <WebsiteOverview />
      <div ref={refs.apparatusRef}><Apparatus data={aparattus} /></div>
      <div ref={refs.newsRef}><News data={news} /></div>
      <div ref={refs.marketRef}><VillageMarket data={produkUMKM} /></div>
      <div ref={refs.activitiesRef}><VillageActivities data={activities} /></div>
      <VillageMap dataProfile={profile} dataMap={boundaryData} />
      <Footer data={profile} scrollToSection={scrollToSection} refs={refs} />
      <BackToTop />
    </>
  );
}
