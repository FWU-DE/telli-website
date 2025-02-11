import { SVGProps } from "react";

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" preserveAspectRatio="none" {...props}>
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="30"
        y1="16"
        x2="2"
        y2="16"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="30"
        y1="7"
        x2="2"
        y2="7"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="30"
        y1="25"
        x2="16"
        y2="25"
      />
    </svg>
  );
}
