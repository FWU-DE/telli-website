import { SVGProps } from "react";

export default function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="none" {...props}>
      <path
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeMiterlimit="10"
        d="M7.799,16.601 C9.092,18.61,11.826,20,15,20c0.59,0,1.163-0.051,1.716-0.142L21,22v-4.04c1.241-1.057,2-2.44,2-3.96 c0-1.552-0.792-2.961-2.081-4.027"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        fill="none"
        stroke="#444444"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit="10"
        d="M11,1C5.477,1,1,4.582,1,9 c0,1.797,0.75,3.45,2,4.785V19l4.833-2.416C8.829,16.85,9.892,17,11,17c5.523,0,10-3.582,10-8S16.523,1,11,1z"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
