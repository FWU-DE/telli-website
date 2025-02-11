import { SVGProps } from "react";

export default function RulerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="none" {...props}>
      <polyline
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        points="12.5,16.5 17,21 22,22 21,17 16.5,12.5"
      />
      <polyline
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        points="11.5,7.5 6,2 2,6 7.5,11.5"
      />
      <rect
        x="1.393"
        y="8.464"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)"
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        width="21.213"
        height="7.071"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="11"
        y1="8"
        x2="12"
        y2="9"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="14"
        y1="5"
        x2="16"
        y2="7"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="8"
        y1="11"
        x2="10"
        y2="13"
      />
      <line
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeLinejoin="miter"
        x1="5"
        y1="14"
        x2="6"
        y2="15"
      />
    </svg>
  );
}
