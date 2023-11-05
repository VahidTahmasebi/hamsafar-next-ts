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
    </>
  );
};

export default HeroSection;
