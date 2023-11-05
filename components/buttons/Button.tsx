import classnames from "classnames";

import { HtmlHTMLAttributes, ReactElement } from "react";

interface Props extends HtmlHTMLAttributes<any> {
  children: React.ReactNode;
  width: string;
  height: string;
  padding: string;
  borderColor?: string;
  color?: string;
  background?: string;
}

const Button = ({
  children,
  width,
  height,
  padding,
  borderColor,
  color,
  background,
}: Props): ReactElement => {
  const classStr = classnames(
    "flex justify-center items-center gap-3 border rounded-3xl text-base font-medium",
    width,
    height,
    padding,
    borderColor,
    color,
    background
  );

  return (
    <button
      //   onClick={onClick}
      className={classStr}>
      {children}
    </button>
  );
};

export default Button;
