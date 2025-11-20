import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/features/Hero";
import { Story } from "@/components/features/Story";
import { AlbumShowcase } from "@/components/features/AlbumShowcase";
import { VideoSection } from "@/components/features/VideoPlayer";
import { Contact } from "@/components/features/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <AlbumShowcase />
        <VideoSection />
        <Contact />
      </main>
    </>
  );
}
