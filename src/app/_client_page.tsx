import Image from "next/image";
import Accordion from "@/components/accordeon";
import Carousell from "@/components/carousell";
import ImageCard from "@/components/image_card";
import LoginButton from "@/components/login-button";
import TopBar from "@/components/topbar";
import ChatIcon from "@/icons/chat";
import CheckMarkIcon from "@/icons/checkmark";
import RulerIcon from "@/icons/ruler";
import ShieldIcon from "@/icons/shield";
import Link from "next/link";
import { FAQ_ITEMS } from "@/utils/const";
import {
  contentMaxWidthClassName,
  h1ClassName,
  paragraphClassName,
} from "@/utils/tailwind/fonts";
import IconAndTextCard from "@/components/icon-and-text-card";
import { cn } from "@/utils/tailwind/cn";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <main className="">
        <section
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-8 pt-4 lg:pb-16",
            contentMaxWidthClassName,
          )}
        >
          <div className="flex flex-col gap-6">
            <h1 className={h1ClassName}>
              Der KI-Chatbot <br /> für die Schule
            </h1>
            <p className={"text-lg sm:text-xl"}>
              Mit telli entsteht eine KI-gestützte Chatbot-Oberfläche, die
              speziell auf den Einsatz im Unterricht zugeschnitten ist. telli
              bietet maßgeschneiderte Funktionen, die den spezifischen
              Bedürfnissen von Lehrkräften und Schülerinnen und Schülern gerecht
              werden.
            </p>
            <div className="flex gap-4 max-[25rem]:flex-col">
              <LoginButton />
              <Link
                href="#people-cards"
                className={cn(
                  "inline-flex items-center justify-center rounded-full border border-telli-purple text-telli-purple bg-white px-8 py-4 transition-colors hover:bg-gray-50",
                  paragraphClassName,
                )}
              >
                Mehr erfahren
              </Link>
            </div>
            <p className="text-sm">
              telli steht aktuell nur ausgewählten Nutzerinnen und Nutzern zu
              Testzwecken zur Verfügung. Sobald telli für Ihre Schule verfügbar
              ist, werden Sie über die Schulleitung informiert.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img src="/lg.png" alt="telli Chat Preview" />
          </div>
        </section>
        <div
          className="bg-light-blue w-full overflow-x-auto scroll-mt-20"
          id="people-cards"
        >
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 lg:py-32",
              contentMaxWidthClassName,
            )}
          >
            <ImageCard
              src="/person1.jpg"
              title="Unterricht vorbereiten mit KI"
              text="Mit telli können Lehrkräfte den Unterricht komfortabel und effizient vorbereiten. Ob Arbeitsblätter, Quizfragen oder Erklärtexte - telli hilft dabei, Inhalte schnell und rechtssicher zu erstellen."
            />
            <ImageCard
              src="/person2.jpg"
              title="Datenschutzkonforme Nutzung"
              text="Die Anwendung wird speziell für deutsche Schulen entwickelt und entspricht höchsten Datenschutzstandards, sodass telli von Lehrenden und Lernenden sorgenfrei genutzt werden kann."
            />
            <ImageCard
              src="/person3.jpg"
              title="KI im Klassenzimmer einsetzen"
              text="Schülerinnen und Schüler können über sogenannte Klassendialoge - das sind von der Lehrkraft erstellte und geteilte Links - mit der KI Aufgaben lösen und gemeinsam an Projekten arbeiten."
            />
          </div>
        </div>
        <section
          id="teacher"
          className={cn(
            "py-16 lg:py-24 text-center flex flex-col items-center justify-center gap-4 scroll-mt-20",
            contentMaxWidthClassName,
            "max-w-3xl",
          )}
        >
          <h2 className={cn(h1ClassName, "text-center")}>
            Was macht telli besonders?
          </h2>
          <p className={paragraphClassName}>
            telli wird in enger Zusammenarbeit mit Pädagoginnen und Pädagogen
            speziell für Lehrkräfte in Deutschland entwickelt. Ein großer
            Vorteil der Chatbot-Oberfläche ist die datenschutzkonforme, schnelle
            und einfache Anmeldung über{" "}
            <Link
              href="https://www.vidis.schule"
              className="text-telli-blue underline"
            >
              VIDIS
            </Link>
            . Zudem wird telli für Lehrkräfte kostenlos nutzbar sein.
          </p>
          <p className={paragraphClassName}>
            Wir arbeiten an einer einfachen, praxisnahen und zuverlässigen
            Lösung, die Lehrkräfte in ihrem Schulalltag bestmöglich unterstützt:
            bei Unterrichtsentwürfen über Materialien für verschiedene
            Lernniveaus bis hin zu administrativen Aufgaben.
          </p>
        </section>
        <div className={contentMaxWidthClassName}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <IconAndTextCard
              icon={<CheckMarkIcon />}
              text="In Deutschland gehostet"
            />
            <IconAndTextCard
              icon={<ShieldIcon />}
              text="Sicherer Betrieb nach DSGVO"
            />
            <IconAndTextCard
              icon={<ChatIcon />}
              text="Konfigurierte Dialoge mit der Klasse teilen"
            />
            <IconAndTextCard
              icon={<RulerIcon />}
              text="Maßgeschneiderte Funktionen für den Unterricht"
            />
          </div>
          <div
            id="faq"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 scroll-mt-20"
          >
            <div className="">
              <h1 className={h1ClassName}>Häufig gestellte Fragen</h1>
              <Accordion items={FAQ_ITEMS} />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/ais-telli-mockup-visual.jpeg"
                alt="AIS telli mockup visual"
                className="rounded-2xl w-full max-w-3xl"
              />
            </div>
          </div>
        </div>
        <section className="bg-light-blue w-full overflow-x-auto py-16 lg:py-24">
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-12",
              contentMaxWidthClassName,
            )}
          >
            <div className="flex flex-col gap-4">
              <h2 className={h1ClassName}>Lernen war noch nie so einfach!</h2>
              <p className={paragraphClassName}>
                telli unterstützt Lehrkräfte bei der Unterrichtsplanung, der
                Erstellung von Lernmaterialien und interaktiven Aufgaben.
                Gleichzeitig hilft telli den Lernenden direkt im Unterricht –
                mit schnellen Erklärungen und individuellen Lernhilfen.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/telli-laptop-mockup.png"
                className="w-fit"
                width={500}
                height={250}
                alt="telli app on a laptop"
              />
            </div>
          </div>
        </section>
        <section className={cn(contentMaxWidthClassName, "py-16 lg:py-24")}>
          <Carousell />
        </section>
        <section
          className={cn(
            contentMaxWidthClassName,
            "flex flex-col items-center gap-6 mb-16 lg:mb-24 max-w-4xl",
          )}
        >
          <p className={cn(paragraphClassName, "text-center")}>
            Das Projekt telli ist Teil des Projekts AIS und wird realisiert
            durch FWU Institut für Film und Bild in Wissenschaft und Unterricht
            gGmbH. Das FWU ist das Medieninstitut der 16 Bundesländer und
            handelt in deren Auftrag.
          </p>
          <em>Gefördert durch:</em>
          <Image
            src="/supported_by.png"
            alt="Supported by"
            width={160}
            height={80}
            className="w-40"
          />
          <em className="text-center">
            Aufgrund eines Beschlusses des Deutschen Bundestages
          </em>
        </section>
      </main>
    </div>
  );
}
