import CurrentNews from "@/component/CurrentNews";
import FeaturedNews from "@/component/home/FeaturedNews";
import FeatureSlider from "@/component/home/FeatureSlider";

export default function Home() {
  return (
    <main className='container py-3'>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <FeatureSlider/>
        </div>
        <div className="col-span-4 px-3">
          <FeaturedNews/>
        </div>
        <div className="border rounded-t pb-2 col-span-3">
          <CurrentNews/>
        </div>
      </div>
    </main>
  )
}
