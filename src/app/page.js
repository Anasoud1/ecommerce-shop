import BestSeller from "@/components/BestSeller";
import Hero from "@/components/Hero";
import LatestCollection from "@/components/LatestCollection";
import OurPolicy from "@/components/OurPolicy";
import GlobalApi from "./(utils)/GlobalApi";

export default async function  Home() {

  const productsList = await GlobalApi.getProductsData()

  return (
    <div className="pt-6 ">
      <Hero />
      <LatestCollection products={productsList} />
      <BestSeller products={productsList} />
      <OurPolicy />
    </div>
  );
}
