import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestCollection from "@/components/LatestCollection";

export default function Home() {
  return (
    <div className="pt-10">
      <Hero />
      <LatestCollection />


      <Footer />
    </div>
  );
}
