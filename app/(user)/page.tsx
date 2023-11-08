import HeroSection from "./HeroSection";
import HotelsSection from "./HotelsSection";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-y-20 mt-7">
      <HeroSection />
      <HotelsSection />
    </div>
  );
};

export default Homepage;
