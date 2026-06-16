import HeroWithHeader from "@/components/sections/HeroWithHeader";
import Footer from "@/components/layout/Footer";
import InnovateSpace from "@/components/sections/InnovateSpace";
import QualityServices from "@/components/sections/QualityServices";
import QualitySafety from "@/components/sections/QualitySafety";
import TransformCommunities from "@/components/sections/TransformCommunities";
import LocationCard from "@/components/sections/LocationCard";
import AboutFounder from "@/components/sections/AboutFounder";
import FounderVision from "@/components/sections/FounderVision";
import OurExperts from "@/components/sections/OurExperts";
import LatestWorks from "@/components/sections/LatestWorks";
import HouseRenovations from "@/components/sections/HouseRenovations";
import QuoteAndFAQ from "@/components/sections/QuoteAndFAQ";

export default function Home() {
  return (
    <>
      <HeroWithHeader />
      <main>
        <InnovateSpace />
        <QualityServices />
        <QualitySafety />
        <TransformCommunities />
        <LocationCard />
        <AboutFounder />
        <FounderVision />
        <OurExperts />
        <LatestWorks />
        <HouseRenovations />
        <QuoteAndFAQ />
      </main>
      <Footer />
    </>
  );
}
