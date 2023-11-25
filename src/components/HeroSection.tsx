import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl max-w-[15ch] text-center font-serif">
            Experience the draw of Gravity.
          </h1>
          <p>Redefining the future of SUVs</p>
          <button className="bg-white text-black uppercase px-6 py-2 rounded-md">
            Stay informed
          </button>
        </div>
        <div className="flex justify-between w-3/5 max-w-[900px]">
          <HighlightItem title="Projected Range" content="Over 440 mi" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Peak Power" content="Over 800 hp" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="Seating" content="Up to 7" />
          <div className="h-full w-[2px] bg-white" />
          <HighlightItem title="0-60 mph" content="Under 3.5 secs" />
        </div>
      </div>
    </section>
  );
};

const HighlightItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="uppercase text-sm">{title}</span>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default HeroSection;
