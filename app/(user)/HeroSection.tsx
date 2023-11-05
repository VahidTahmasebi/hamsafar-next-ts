import Image from "next/image";

import Button from "@/components/buttons/Button";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-[500px]">
        <div className="flex justify-between items-center">
          <section className="max-w-lg flex flex-col gap-6 mr-20 text-base text-primary-Purple-light">
            <h4 className="text-c-orange-200">Explore the world</h4>
            <h2 className="text-5xl font-bold">
              Plan your trip with us whenever you want
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              ducimus fuga enim nam officia laboriosam voluptates aut dolores
              veritatis? Unde tempora nulla laborum dolor. Id ratione velit
              ipsa. Saepe, neque.
            </p>
            <div>
              <Button
                width="w-36"
                height="h-12"
                padding="px-5"
                color="text-[#f0fdf4]"
                background="bg-c-primary-500">
                Contact Us
              </Button>
            </div>
          </section>
          <Image
            src="/assets/images/hero-image.webp"
            alt="Home"
            width={581}
            height={653}
            className="object-contain"
          />
        </div>
      </div>
      <div className="max-w-2xl h-16 flex justify-around items-center px-5 rounded-full shadow-2xl shadow-c-primary-600/70">
        <button className="flex gap-4">
          <span>Where</span>
          <Image
            src="/assets/icons/place-icon.svg"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        <div className="w-1 h-10 rounded-xl bg-c-primary-600/30" />
        <button className="flex gap-4">
          <span>When</span>
          <Image
            src="/assets/icons/calendar-search-icon.svg"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        <div className="w-1 h-10 rounded-xl bg-c-primary-600/30" />
        <button className="flex gap-4">
          <span>Travel Type</span>
          <Image
            src="/assets/icons/bus-icon.svg"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        <Button
          width="w-36"
          height="h-12"
          padding="px-5"
          color="text-[#f0fdf4]"
          background="bg-c-primary-500">
          Search
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
