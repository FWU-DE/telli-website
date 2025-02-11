import ChevronLeftIcon from "@/icons/chevron-left";
import Link from "next/link";

export default function LegalNavbar() {
  return (
    <nav className="flex gap-4 items-center text-telli-purple">
      <Link className="flex gap-4 items-center" href="/">
        <ChevronLeftIcon className="" />
        <span className="font-medium">Zur Startseite</span>
      </Link>
    </nav>
  );
}
