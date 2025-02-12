import Link from "next/link";
import TelliIcon from "../icons/telli";

export default function Footer() {
  return (
    <footer className="bg-telli-purple flex flex-col text-white w-full items-center gap-4 px-6 py-12 lg:py-16">
      <Link href="/" className="flex items-center gap-4">
        <TelliIcon className="text-white h-10 w-10" />
        <span className="text-3xl font-medium">telli</span>
      </Link>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link href="/datenschutz" className="font-medium btn-bottom">
          Datenschutz
        </Link>
        <Link href="/impressum" className="font-medium btn-bottom">
          Impressum
        </Link>
      </div>
    </footer>
  );
}
