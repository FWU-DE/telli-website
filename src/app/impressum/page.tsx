import LegalNavbar from "@/components/legal-navbar";
import Link from "next/link";

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <LegalNavbar />
      <div className="flex justify-center flex-col mt-12">
        <h1 className="text-2xl font-bold mb-8">Impressum</h1>
        <div className="space-y-6">
          <div>
            <p className="font-bold">FWU Institut für Film und Bild</p>
            <p>in Wissenschaft und Unterricht gemeinnützige GmbH</p>
            <p>Bayerfilmplatz 3</p>
            <p>82031 Grünwald</p>
          </div>

          <div className="space-y-1">
            <p>
              <span className="font-bold">Telefon:</span> 089/6497-1
            </p>
            <p>
              <span className="font-bold">Telefax:</span> 089/6497-300
            </p>
            <p>
              <span className="font-bold">Internet:</span>{" "}
              <Link
                href="http://www.fwu.de"
                className="text-purple-600 hover:text-purple-800"
              >
                www.fwu.de
              </Link>
            </p>
            <p>
              <span className="font-bold">E-Mail:</span>{" "}
              <Link
                href="mailto:info@fwu.de"
                className="text-purple-600 hover:text-purple-800"
              >
                info@fwu.de
              </Link>
            </p>
          </div>

          <p>Nachfolgend mit „FWU&quot; oder „Telli&quot; abgekürzt</p>

          <div className="space-y-1">
            <p>
              <span className="font-bold">Handelsregister:</span> Amtsgericht
              München B 2636
            </p>
            <p>
              <span className="font-bold">
                Umsatzsteuer-Identifikationsnummer:
              </span>{" "}
              DE 129123719
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-bold">Vertretungsberechtigte</p>
            <p>
              <span className="font-bold">Geschäftsführer:</span> Andreas
              Koschinský (Direktor), Rüdiger Nill
            </p>
            <p>
              <span className="font-bold">Sitzland</span> ist die Bundesrepublik
              Deutschland.
            </p>
          </div>
          <div>
            {" "}
            <p>
              Nationale Marktüberwachungsbehörde der Verordnung (EU) 2024/1689
              vom 13. Juni 2024 („KI–Verordnung“)
            </p>
            <p>N.N.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
