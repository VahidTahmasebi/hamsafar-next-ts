import Image from "next/image";

import starLazyIcon from "@/public/assets/icons/star-lazy-icon.svg";

const CartLazyLoad = () => {
  return (
    <>
      <div className="absolute top-4 right-7">
        <Image
          src={starLazyIcon}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-6 h-6 animate-pulse"
        />
      </div>
      <div className="cart__lazy--class w-1/6 bottom-10 left-7" />
      <div className="cart__lazy--class w-1/2 bottom-4 left-7" />
    </>
  );
};

export default CartLazyLoad;
