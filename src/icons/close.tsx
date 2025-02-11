import { SVGProps } from "react";

export default function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" preserveAspectRatio="none" {...props}>
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="22"
        y1="10"
        x2="10"
        y2="22"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="22"
        y1="22"
        x2="10"
        y2="10"
      />
    </svg>
  );
}
