import LegalNavbar from "@/components/legal-navbar";
import { cn } from "@/utils/tailwind/cn";
import { h1ClassName } from "@/utils/tailwind/fonts";
import Link from "next/link";

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <LegalNavbar />
      <div className="flex justify-center flex-col mt-12">
        <h1 className={cn(h1ClassName, "mb-6")}>Impressum</h1>
        <div className="space-y-6">
          <div>
            <p className="font-bold">FWU Institut für Film und Bild</p>
            <p>in Wissenschaft und Unterricht gemeinnützige GmbH</p>
            <p>Bavariafilmplatz 3</p>
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
                className="text-telli-blue underline"
              >
                www.fwu.de
              </Link>
            </p>
            <p>
              <span className="font-bold">E-Mail:</span>{" "}
              <Link
                href="mailto:info@fwu.de"
                className="text-telli-blue underline"
              >
                info@fwu.de
              </Link>
            </p>
          </div>

          <p>Nachfolgend mit „FWU&quot; oder „telli&quot; abgekürzt</p>

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
              Koschinsky (Direktor), Rüdiger Nill
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
        <h1 className={cn(h1ClassName, "mb-6", "mt-12")}>Urheberrecht</h1>
        <div className="space-y-6">
          <p>© FWU Institut für Film und Bild – alle Rechte vorbehalten.</p>
          <p>Falls nicht anders angegeben, unterliegen alle Seiten des Webangebots von telli und telli Dialog dem Urheberrecht (Copyright). Dies gilt insbesondere für Texte, Bilder, Grafiken, Ton-, Video- oder Animationsdateien einschließlich deren Anordnung auf den Webseiten. Eine Vervielfältigung oder Verwendung solcher Seiten (oder Teilen davon) in anderen elektronischen oder gedruckten Publikationen und deren Veröffentlichung (auch im Internet) ist nur nach vorheriger Genehmigung gestattet. Die Genehmigung zur Publikation der Webseiten kann telli erteilen. Weiterhin können Bilder, Grafiken, Text- oder sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter unterliegen.</p>
          <p>Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung in unserem Internetangebot ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind.</p>
        </div>
        <h1 className={cn(h1ClassName, "mb-6", "mt-12")}>Haftungsausschluss</h1>
        <div className="space-y-6">
          <p>telli hat alle in seinem Bereich bereitgestellten Informationen nach bestem Wissen und Gewissen erarbeitet und geprüft. Es wird jedoch keine Gewähr für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität und jederzeitige Verfügbarkeit der bereit gestellten Informationen übernommen. Unbeschadet der Regelungen des § 675 Absatz 2 BGB gilt für das bereitgestellte Informationsangebot folgende Haftungsbeschränkung: telli und seine Bediensteten haften nicht für Schäden, die durch die Nutzung oder Nichtnutzung der im Internetangebot von telli angebotenen Informationen entstehen. Für etwaige Schäden, die beim Aufrufen oder Herunterladen von Daten durch Computerviren oder der Installation oder Nutzung von Software verursacht werden, wird nicht gehaftet.</p>
          <p>Namentlich gekennzeichnete Internetseiten geben die Auffassungen und Erkenntnisse der abfassenden Personen wieder.</p>
          <p>telli behält es sich ausdrücklich vor, einzelne Webseiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
          <p>Wir betonen ausdrücklich, dass wir keinerlei Einfluss auf die aktuelle sowie zukünftige Gestaltung und die Inhalte externer Internetseiten haben. Deshalb distanzieren wir uns hiermit ausdrücklich von den Inhalten aller externen Internetseiten, auf die wir auf unserer Website verweisen. Die Inhalte externer Internetseiten machen wir uns nicht zu Eigen. Diese Erklärung gilt für alle Seiten dieser Homepage und der dort angebrachten Links. Für illegale, fehlerhafte oder unvollständige Informationen sowie insbesondere für Schäden durch die Nutzung der gelinkten Seiten haftet ausschließlich der Anbieter der Seite, auf welche verwiesen wird, nicht derjenige, der über Links lediglich auf die jeweilige Veröffentlichung verweisen.</p>
        </div>
      </div>
    </div>
  );
}
