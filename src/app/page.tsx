import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import StrategicVision from "@/components/home/StrategicVision";
import DetailedServices from "@/components/home/DetailedServices";
import TrustStrip from "@/components/common/TrustStrip";
import FeatureGrid from "@/components/common/FeatureGrid";
import CallToAction from "@/components/common/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustStrip />
      <StrategicVision />
      <FeatureGrid />
      <Services />
      <DetailedServices />
      <About />
      <CallToAction />
    </div>
  );
}
