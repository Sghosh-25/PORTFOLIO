
import { Cta } from "@/components/Cta";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import About_us from "@/components/ui/About_us";
import Hero from "@/components/ui/Hero";
import { Work } from "@/components/Work";
export default function Home() {
  return (
    <main>
      <Hero />
      <About_us />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
