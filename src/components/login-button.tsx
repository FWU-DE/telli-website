import { TELLI_CHATBOT_URL } from "@/utils/const";
import { cn } from "@/utils/tailwind/cn";
import { paragraphClassName } from "@/utils/tailwind/fonts";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      href={TELLI_CHATBOT_URL}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#4B2E83] px-8 py-4 font-normal text-white transition-colors hover:bg-[#3B2366]",
        paragraphClassName,
      )}
    >
      Login
    </Link>
  );
}
