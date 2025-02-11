"use client";
import Image from "next/image";
import Accordion from "@/components/accordeon";
import Carousell from "@/components/carousell";
import Footer from "@/components/footer";
import ImageCard from "@/components/image_card";
import LoginButton from "@/components/login-button";
import TopBar from "@/components/topbar";
import ChatIcon from "@/icons/chat";
import CheckMarkIcon from "@/icons/checkmark";
import RulerIcon from "@/icons/ruler";
import ShieldIcon from "@/icons/shield";
import { handleScroll } from "@/utils/scroll";

export default function App() {
  const faqItems = [
    {
      id: 1,
      title: "Ist telli rechtskonform für den Einsatz an Schulen?",
      content:
        "Ja, telli erfüllt Datenschutz- und Sicherheitsstandards in Deutschland, sodass Lehrkräfte, Schülerinnen und Schüler den KI-Chatbot bedenkenlos nutzen können.",
    },
    {
      id: 2,
      title: "Ist die Nutzung von telli kostenlos?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Wie kann ich mich bei telli anmelden?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Welches LLM steckt hinter telli?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <TopBar />
        <main className="">
          <section className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-8 py-16 container mx-auto px-4">
            <div className="flex max-w-xl flex-col gap-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Der KI-Chatbot <br /> für die Schule
              </h1>
              <p className="text-lg text-gray-600">
                Mit telli entsteht eine KI-gestützte Chatbot-Oberfläche, die
                speziell auf den Einsatz im Unterricht zugeschnitten ist. telli
                bietet maßgeschneiderte Funktionen, die den spezifischen
                Bedürfnissen von Lehrkräften und Schülerinnen und Schülern
                gerecht werden.
              </p>
              <div className="flex gap-4">
                <LoginButton />
                <button
                  onClick={() => handleScroll("people_cards")}
                  className="inline-flex items-center justify-center rounded-full border border-telli-purple text-telli-purple bg-white px-8 py-3 text-lg transition-colors hover:bg-gray-50"
                >
                  Mehr erfahren
                </button>
              </div>
              <p className="text-sm text-gray-500">
                telli steht aktuell nur ausgewählten Nutzerinnen und Nutzern zu
                Testzwecken zur Verfügung. Sobald telli für Ihre Schule
                verfügbar ist, werden Sie über die Schulleitung informiert.
              </p>
            </div>
            <Image
              src="/telli-chat.png"
              alt="Telli Chat Preview"
              width={600}
              height={400}
              className="w-full"
            />
          </section>
          <div
            className="bg-light-blue w-full overflow-x-auto"
            id="people_cards"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-6">
              <ImageCard
                src="/person 1.jpg"
                title="Unterricht vorbereiten mit KI"
                text="Mit telli können Lehrkräfte den Unterricht komfortabel und effizient vorbereiten. Ob Arbeitsblätter, Quizfragen oder Erklärtexte - telli hilft dabei, Inhalte schnell und rechtssicher zu erstellen."
              />
              <ImageCard
                src="/preson 2.jpg"
                title="Datenschutzkonforme Nutzung"
                text="Die Anwendung wird speziell für deutsche Schulen entwickelt und entspricht höchsten Datenschutzstandards, sodass telli von Lehrenden und Lernenden sorgenfrei genutzt werden kann."
              />
              <ImageCard
                src="/person 3.jpg"
                title="KI im Klassenzimmer einsetzen"
                text="Schülerinnen und Schüler können über sogenannte Klassendialoge - das sind von der Lehrkraft erstellte und geteilte Links - mit der KI Aufgaben lösen und gemeinsam an Projekten arbeiten."
              />
            </div>
          </div>
          <section className="py-16 text-center flex flex-col items-center justify-center px-4 mx-auto">
            <h2
              id="what_special"
              className="mb-6 text-5xl font-bold text-gray-900"
            >
              Was macht telli besonders?
            </h2>
            <p className="max-w-3xl text-lg text-gray-600">
              telli wird in enger Zusammenarbeit mit Pädagoginnen und Pädagogen
              speziell für Lehrkräfte in Deutschland entwickelt. Ein großer
              Vorteil der Chatbot-Oberfläche ist die datenschutzkonforme,
              schnelle und einfache Anmeldung über{" "}
              <a
                href="https://www.vidis.schule"
                className="text-[#4B2E83] underline hover:text-[#3B2366]"
              >
                VIDIS
              </a>
              . Zudem wird telli für Lehrkräfte kostenlos nutzbar sein. Wir
              arbeiten an einer einfachen, praxisnahen und zuverlässigen Lösung,
              die Lehrkräfte in ihrem Schulalltag bestmöglich unterstützt: bei
              Unterrichtsentwürfen über Materialien für verschiedene Lernniveaus
              bis hin zu administrativen Aufgaben.
            </p>
          </section>
          <div className="container mx-auto max-w-5xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f7fdfb] p-6 rounded-lg flex items-start gap-3">
                <div className="w-7 h-7 shrink-0">
                  <CheckMarkIcon />
                </div>
                <h3 className="text-lg font-light">In Deutschland gehostet</h3>
              </div>
              <div className="bg-[#f7fdfb] p-6 rounded-lg flex items-start gap-3">
                <div className="w-7 h-7 shrink-0">
                  <ShieldIcon />
                </div>
                <h3 className="text-lg font-light">
                  Sicherer Betrieb nach DSGVO
                </h3>
              </div>
              <div className="bg-[#f7fdfb] p-6 rounded-lg flex items-start gap-3">
                <div className="w-6 h-6 shrink-0">
                  <ChatIcon />
                </div>
                <h3 className="text-lg font-light">
                  Konfigurierte Dialoge mit der Klasse teilen
                </h3>
              </div>
              <div className="bg-[#f7fdfb] p-6 rounded-lg flex items-start gap-3">
                <div className="w-6 h-6 shrink-0">
                  <RulerIcon />
                </div>
                <h3 className="text-lg font-light">
                  Maßgeschneiderte Funktionen für den Unterricht
                </h3>
              </div>
            </div>
            <div id="faq" className="flex items-start gap-8">
              <div className="p-6 w-xl min-h-96 shrink-0">
                <h1 className="text-4xl font-bold mb-8">
                  Häufig gestellte Fragen
                </h1>
                <Accordion items={faqItems} />
              </div>
              <Image
                src="/ais-telli-mockup-visual.jpeg"
                alt="AIS telli mockup visual"
                width={400}
                height={533}
                className="rounded-2xl object-contain aspect-3/4 shrink-0"
              />
            </div>
            <Carousell />
            <section className="mx-auto px-4 max-w-3xl flex flex-col items-center gap-4 mt-16">
              <p>
                Das Projekt telli ist Teil des Projekts AIS und wird realisiert
                durch FWU Institut für Film und Bild in Wissenschaft und
                Unterricht gGmbH. Das FWU ist das Medieninstitut der 16
                Bundesländer und handelt in deren Auftrag.
              </p>
              <em>Gefördert durch: </em>
              <Image
                src="/supported_by.png"
                alt="Supported by"
                width={160}
                height={80}
                className="w-40"
              />
              <em>Aufgrund eines Beschlusses des Deutschen Bundestages</em>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
