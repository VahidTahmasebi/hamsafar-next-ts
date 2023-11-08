import Image from "next/image";

import Button from "@/common/buttons/Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-0 transition-all duration-700 ease-out">
      <div className=" sm:h-4/6">
        <div className="flex justify-between items-center">
          <section className="flex flex-col gap-6 text-base">
            <h4 className="font-bold text-c-orange-200">Explore the world</h4>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Plan your trip with us whenever you want
            </h2>
            <p className="hidden sm:block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              ducimus fuga enim nam officia laboriosam voluptates aut dolores
              veritatis? Unde tempora nulla laborum dolor. Id ratione velit
              ipsa. Saepe, neque.
            </p>
            <div className="hidden sm:block">
              <Button
                width="w-32"
                height="h-12"
                padding="px-5"
                color="text-[#f0fdf4]"
                background="bg-c-primary-500">
                Book Trip
              </Button>
            </div>
          </section>
          <Image
            src="/assets/images/hero-image.webp"
            alt="Hero Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-1/2 hidden md:block h-[19rem] xl:h-[27rem]"
          />
        </div>
      </div>
      <div className="sm:max-w-2xl sm:h-16 flex flex-col sm:flex-row justify-around items-center gap-y-10 sm:px-5 rounded-full sm:shadow-2xl sm:shadow-c-primary-600/70">
        <button className="flex gap-4">
          <span>Where</span>
          <Image
            src="/assets/icons/place-icon.svg"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="icon--class"
          />
        </button>
        <div className="w-1 h-10 hidden sm:block rounded-xl bg-c-primary-600/30" />
        <button className="flex gap-4">
          <span>When</span>
          <Image
            src="/assets/icons/calendar-search-icon.svg"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="icon--class"
          />
        </button>
        <div className="w-1 h-10 hidden sm:block rounded-xl bg-c-primary-600/30" />
        <button className="flex gap-4">
          <span>Travel Type</span>
          <Image
            src="/assets/icons/bus-icon.svg"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="icon--class"
          />
        </button>
        <Button
          width="w-32"
          height="h-12"
          padding="px-5"
          color="text-[#f0fdf4]"
          background="bg-c-primary-500">
          <Image
            src="/assets/icons/search-icon.svg"
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="icon--class mr-3"
          />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
