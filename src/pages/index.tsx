import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Section from "@/components/Section";

import BgOverview from "@/../public/bg-overview.jpeg";
import BgInterior from "@/../public/bg-interior.jpeg";
import BgCharging from "@/../public/bg-charging.jpeg";
import BgConnectivity from "@/../public/bg-connectivity.jpeg";
import BgSafety from "@/../public/bg-safety.jpeg";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <Section
        image={BgOverview}
        tag="Overview"
        title="Elevate adventure in the luxury electric SUV of tomorrow."
        description="More space. More utility - All luxury. Feel the freedom to move as quickly as life comes. The world is yours, and every road is an invitation."
      />
      <Section
        image={BgInterior}
        tag="Interior"
        title="Interior space. Superior taste."
        description="Whether with family or flying solo, comfortably fit up to 7 with a roomy 3rd row, or fold the seats to reveal more space for what matters most."
      />
      <Section
        image={BgCharging}
        tag="Charging"
        title="Long-distances in lightning speed."
        description="Go at the speed of Gravity with ultra quick charging at over 300kW. Explore more beaches and beyond with less waiting and more convenient control."
      />
      <Section
        image={BgConnectivity}
        tag="Connectivity"
        title="Feel the world at your fingertips."
        description="A single tap transforms your cabin into a personal multi-sensory wellness space with curated content where each experience is custom designed with an elegant combination of visuals, lighting, audio, temperature, and massage."
      />
      <Section
        image={BgSafety}
        tag="Safety"
        title="Designed for peace of mind."
        description="Welcome to DreamDrive, your elegantly advanced driver assistance system. That means more sensors and better radar. Day or night - rain or shine - rest assured that all angles are covered."
      />
    </main>
  );
}
