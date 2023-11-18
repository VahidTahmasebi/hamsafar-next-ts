import React, { FC } from "react";
import Image from "next/image";

import starLazyIcon from "@/public/assets/icons/star-lazy-icon.svg";

interface ICartLazyLoadProps {
  count: number;
}

const CartLazyLoad: FC<ICartLazyLoadProps> = ({ count }) => {
  return (
    <div className="h-96 flex justify-between items-center gap-x-5 rounded-3xl shadow animate-pulse">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="wh-full--class cart-container__lazy--class">
            <div className="absolute top-4 right-7">
              <Image
                src={starLazyIcon}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-6 h-6 animate-pulse"
              />
            </div>
            <div className="cart__lazy--class w-1/6 bottom-10 left-7" />
            <div className="cart__lazy--class w-1/2 bottom-4 left-7" />
          </div>
        ))}
    </div>
  );
};

export default CartLazyLoad;
