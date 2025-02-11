import { SVGProps } from "react";

export default function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="none" {...props}>
      <line
        stroke="#444444"
        fill="none"
        strokeWidth="1"
        strokeMiterlimit="10"
        x1="12"
        y1="2"
        x2="12"
        y2="22"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <line
        stroke="#444444"
        fill="none"
        strokeWidth="1"
        strokeMiterlimit="10"
        x1="20.904"
        y1="12"
        x2="3.096"
        y2="12"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        d="M12,2C9,4,5,5,2,5 c0,7,3,14,10,17c7-3,10-10,10-17C19,5,15,4,12,2z"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
