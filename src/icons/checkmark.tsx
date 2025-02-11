import { SVGProps } from "react";

export default function CheckMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="none" {...props}>
      <polyline
        points="2 14 8 20 22 2"
        fill="none"
        stroke="#444"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
    </svg>
  );
}
