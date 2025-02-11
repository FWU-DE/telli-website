import TelliIcon from "../icons/telli";

export default function Footer() {
  return (
    <footer className="bg-telli-purple flex flex-col text-white w-full items-center gap-4 p-6 pb-12">
      <div className="flex gap-2 items-center gap-4">
        <TelliIcon className="text-white h-10 w-10" />
        <span className="text-3xl font-medium">telli</span>
      </div>
      <a>Datenschutz</a>
      <a>Impressum</a>
    </footer>
  );
}
