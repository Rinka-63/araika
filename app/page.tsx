"use client";

import Hero from "./home/components/Hero";
import OurStory from "./home/components/OurStory";
import Menu from "./home/components/Menu";
import OwnerProfile from "./home/components/Owner";

export default function Home() {
  return (
    <main className="bg-[#1A1412] min-h-screen">
      <Hero />
      <OurStory />
      <Menu />
      <OwnerProfile />
    </main>
  );
}
