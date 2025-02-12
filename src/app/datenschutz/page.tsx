import LegalNavbar from "@/components/legal-navbar";
import { TELLI_WEBSITE_URL } from "@/utils/const";
import { h1ClassName, h2ClassName } from "@/utils/tailwind/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <LegalNavbar />
      <h1 className={h1ClassName}>Datenschutzerklärung</h1>
      <em className="text-sm mb-8">Stand: 10. Februar 2025</em>
      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">1. Datenschutz</h2>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit
          mit Wirkung für die Zukunft zu ändern. Die jeweils aktuelle Version
          ist auf unserem Internetauftritt verfügbar. Bitte besuchen Sie unseren
          Internetauftritt regelmäßig und informieren Sie sich über die jeweils
          geltenden Datenschutzbestimmungen.
        </p>

        <p>
          <span>
            Diese Datenschutzerklärung gilt für den Webauftritt von telli:{" "}
          </span>
          <Link
            href={TELLI_WEBSITE_URL}
            className="text-[rgba(2,165,155,1)] underline"
          >
            {TELLI_WEBSITE_URL}
          </Link>
          .
        </p>
        <p>
          Wenn Sie telli benutzen, werden verschiedene personenbezogene Daten
          erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
          identifiziert werden können. Die vorliegende Datenschutzerklärung
          erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
          erläutert auch, wie und zu welchem Zweck das geschieht und welche
          Rechte Sie als Betroffene/r haben.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold">
          2. Hinweis zur verantwortlichen Stelle
        </h2>
        <p>
          FWU – Institut für Film und Bild in Wissenschaft und Unterricht
          gemeinnützige GmbH
        </p>
        <p>Bavariafilmplatz 3</p>
        <p>82031 Grünwald, Deutschland</p>
        <p>Handelsregister/Nr.: B 2636 beim Amtsgericht München</p>
        <p>Geschäftsführer: Andreas Koschinsky, Rüdiger Nill</p>
        <p>+49 (0) 89 6497 – 1</p>
        <p>info@fwu.de</p>
        <p>Datenschutzbeauftragter:</p>
        <p>Ulrich Kasberger</p>
        <p>Bavariafilmplatz 3</p>
        <p>82031 Grünwald, Deutschland</p>
        <p>
          Weiterhin besteht ein Beschwerderecht bei der zuständigen
          Aufsichtsbehörde: Bayerisches Landesamt für Datenschutzaufsicht
        </p>
        <p>Diese können Sie unter folgenden Kontaktdaten erreichen:</p>
        <p>Adresse: Promenade 18, 91522 Ansbach</p>
        <p>Postanschrift: Postfach 1349, 91504 Ansbach</p>
        <p>Telefon: 0981/180093-0</p>
        <p>E-Mail: poststelle@lda.bayern.de</p>
        <div>
          <span>Internet: </span>
          <Link
            href="https://www.lda.bayern.de"
            className="text-[rgba(2,165,155,1)] underline"
          >
            https://www.lda.bayern.de
          </Link>
        </div>
      </section>
      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          3. Welche Quellen und Daten nutzen wir?
        </h2>
        <p>
          Wir erheben und verarbeiten – soweit zur Erfüllung unserer Aufgaben
          erforderlich – personenbezogene Daten, die wir von der betroffenen
          natürlichen Person zulässigerweise (z.B. aufgrund einer von Ihnen
          erteilten Einwilligung) erhalten haben.
        </p>
        <p>
          Wir verarbeiten zudem personenbezogene Daten, die wir im Rahmen einer
          Geschäftsbeziehung von der betroffenen Person, die Vertragspartei ist,
          erhalten und die uns die betroffene Person über unser Kontaktformular
          oder per E-Mail übermittelt hat.
        </p>
        <p>
          Relevante personenbezogene Daten sind ausschließlich folgende
          Personalien: Name, Vorname, E-Mailadresse
        </p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold">
          4. Wofür verarbeiten wir Ihre Daten (Zweck der Verarbeitung) und auf
          welcher Rechtsgrundlage?
        </h2>
        <p>a) Aufgrund Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
        <p>
          Soweit Sie uns eine Einwilligung zur Verarbeitung (Art. 4 Nr. 2 DSGVO)
          von personenbezogenen Daten für bestimmte Zwecke erteilt haben, ist
          die Rechtmäßigkeit dieser Verarbeitung auf Basis Ihrer Einwilligung
          gegeben.
        </p>
        <p>
          b) Zur Erfüllung von vertraglichen Pflichten (Art. 6 Abs. 1 lit. b
          DSGVO)
        </p>
        <p>
          Die Verarbeitung (Art. 4 Nr. 2 DSGVO) personenbezogener Daten kann
          auch zur Begründung, Durchführung sowie Beendigung eines Vertrages
          erfolgen. Im Falle eines Vertragsabschlusses ist die Verarbeitung also
          im Wesentlichen für die Erfüllung des Vertrags nötig, dessen
          Vertragspartei die betroffene Person ist, oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
          betroffenen Person erfolgen.
        </p>
        <p>
          c) Aufgrund unseres überwiegenden berechtigten Interesses (Art. 6 Abs.
          1 lit f DSGVO)
        </p>
        <p>
          Die Verarbeitung personenbezogener Daten kann auch in unserem
          überwiegenden berechtigten Interesse erfolgen, wenn dies für die
          Gewährleistung der Netz- und Informationssicherheit unbedingt
          notwendig und verhältnismäßig ist, d.h. soweit dadurch die Fähigkeit
          eines Netzes oder Informationssystems gewährleistet wird, mit einem
          vorgegebenen Grad der Zuverlässigkeit Störungen oder widerrechtliche
          oder mutwillige Eingriffe abzuwehren, die die Verfügbarkeit,
          Authentizität, Vollständigkeit und Vertraulichkeit von gespeicherten
          oder übermittelten personenbezogenen Daten sowie die Sicherheit damit
          zusammenhängender Dienste, die über diese Netze oder
          Informationssysteme angeboten werden bzw. zugänglich sind,
          beeinträchtigen. Ein solches berechtigtes Interesse könnte
          beispielsweise darin bestehen, den Zugang Unbefugter zu elektronischen
          Kommunikationsnetzen und die Verbreitung schädlicher Programmcodes zu
          verhindern sowie Angriffe in Form der gezielten Überlastung von
          Servern („Denial of service“-Angriffe) und Schädigungen von Computer-
          und elektronischen Kommunikationssystemen abzuwehren.
        </p>
        <p>
          Wir erheben und verarbeiten – soweit zur Erfüllung unserer Aufgaben
          erforderlich – personenbezogene Daten, die wir von der betroffenen
          natürlichen Person zulässigerweise (z.B. aufgrund einer von Ihnen
          erteilten Einwilligung) erhalten haben.
        </p>
        <p>
          Wir verarbeiten zudem personenbezogene Daten, die wir im Rahmen einer
          Geschäftsbeziehung von der betroffenen Person, die Vertragspartei ist,
          erhalten und die uns die betroffene Person über unser Kontaktformular
          oder per E-Mail übermittelt hat.
        </p>
        <p>
          Relevante personenbezogene Daten sind ausschließlich folgende
          Personalien: Name, Vorname, E-Mailadresse
        </p>
        <p>
          4. Wofür verarbeiten wir Ihre Daten (Zweck der Verarbeitung) und auf
          welcher Rechtsgrundlage?
        </p>
        <p>1. a) Aufgrund Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
        <p>
          Soweit Sie uns eine Einwilligung zur Verarbeitung (Art. 4 Nr. 2 DSGVO)
          von personenbezogenen Daten für bestimmte Zwecke erteilt haben, ist
          die Rechtmäßigkeit dieser Verarbeitung auf Basis Ihrer Einwilligung
          gegeben.
        </p>
        <p>
          1. b) Zur Erfüllung von vertraglichen Pflichten (Art. 6 Abs. 1 lit. b
          DSGVO)
        </p>
        <p>
          Die Verarbeitung (Art. 4 Nr. 2 DSGVO) personenbezogener Daten kann
          auch zur Begründung, Durchführung sowie Beendigung eines Vertrages
          erfolgen. Im Falle eines Vertragsabschlusses ist die Verarbeitung also
          im Wesentlichen für die Erfüllung des Vertrags nötig, dessen
          Vertragspartei die betroffene Person ist, oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
          betroffenen Person erfolgen.
        </p>
        <p>
          1. c) Aufgrund unseres überwiegenden berechtigten Interesses (Art. 6
          Abs. 1 lit f DSGVO)
        </p>
        <p>
          Die Verarbeitung personenbezogener Daten kann auch in unserem
          überwiegenden berechtigten Interesse erfolgen, wenn dies für die
          Gewährleistung der Netz- und Informationssicherheit unbedingt
          notwendig und verhältnismäßig ist, d.h. soweit dadurch die Fähigkeit
          eines Netzes oder Informationssystems gewährleistet wird, mit einem
          vorgegebenen Grad der Zuverlässigkeit Störungen oder widerrechtliche
          oder mutwillige Eingriffe abzuwehren, die die Verfügbarkeit,
          Authentizität, Vollständigkeit und Vertraulichkeit von gespeicherten
          oder übermittelten personenbezogenen Daten sowie die Sicherheit damit
          zusammenhängender Dienste, die über diese Netze oder
          Informationssysteme angeboten werden bzw. zugänglich sind,
          beeinträchtigen. Ein solches berechtigtes Interesse könnte
          beispielsweise darin bestehen, den Zugang Unbefugter zu elektronischen
          Kommunikationsnetzen und die Verbreitung schädlicher Programmcodes zu
          verhindern sowie Angriffe in Form der gezielten Überlastung von
          Servern („Denial of service“-Angriffe) und Schädigungen von Computer-
          und elektronischen Kommunikationssystemen abzuwehren.
        </p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold">
          5. Gibt es für Sie eine Pflicht zur Bereitstellung von Daten?
        </h2>
        <p className="my-4">
          Im Rahmen einer Geschäftsbeziehung haben Sie diejenigen
          personenbezogenen Daten bereitzustellen, die für die Aufnahme und
          Durchführung der Geschäftsbeziehung und die Erfüllung der damit
          verbundenen vertraglichen Pflichten erforderlich sind oder zu deren
          Erhebung wir gesetzlich verpflichtet sind. Ohne diese Daten wird in
          der Regel der Abschluss des Vertrages abgelehnt werden müssen oder ein
          bestehender Vertrag nicht mehr durchgeführt werden können und ggf.
          beendet werden müssen.
        </p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold my-4">
          6. Wer bekommt Ihre Daten?
        </h2>
        <p className="my-4">
          Ihre personenbezogenen Daten werden natürlichen oder juristischen
          Personen, Behörden, Einrichtungen oder anderen Stellen offengelegt,
          wenn dies für die Erfüllung unserer oder deren Aufgaben oder
          Verpflichtungen rechtlich zulässig und erforderlich ist. Empfänger
          personenbezogener Daten können insbesondere sein:
        </p>
        <ul className="list-disc ml-6">
          <li>Mitarbeiter des FWU</li>
        </ul>
        <p>folgende von uns eingesetzte Auftragsverarbeiter (Art. 28 DSGVO):</p>

        <ul className="list-disc ml-6">
          <li>Mitarbeiter des FWU</li>
        </ul>
        <p>folgende von uns eingesetzte Auftragsverarbeiter (Art. 28 DSGVO):</p>

        <ul className="list-disc ml-6">
          <li>netz-haut GmbH, Friedrich-Bergius-Ring 12, 97076 Würzburg</li>
          <li>
            DeutschlandGPT GmbH, Gabriele-Münter-Straße 3, 82110 Germering
          </li>
        </ul>
        <p>
          Als technischer Dienstleister des FWU nimmt die netz-haut GmbH Ihre
          Daten und Erklärungen entgegen, diese Daten werden auf Servern der
          netz-haut GmbH gespeichert. Eine entsprechende Vereinbarung zur
          Verarbeitung personenbezogener Daten mit dem der netz-haut GmbH zum
          Schutz sämtlicher Daten liegt vor.
        </p>
        <p>
          Als Dienstleister von telli entwickelt die DeutschlandGPT GmbH telli,
          und kommt dadurch mit Ihren Daten und Erklärungen in Berührung. Eine
          entsprechende Vereinbarung zur Verarbeitung personenbezogener Daten
          mit der DeutschlandGPT GmbH zum Schutz sämtlicher Daten liegt vor.
        </p>
        <p>
          An weitere Datenempfänger außerhalb von telli geben wir Daten zu
          anderen als den in diesen Hinweisen genannten Zwecken nur weiter,
          sofern gesetzliche Bestimmungen dies erlauben oder gebieten, Sie Ihre
          Einwilligung zur Datenübermittlung erteilt haben oder wir zur
          Erteilung einer Auskunft befugt sind.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold my-4">
          7. Werden Daten in ein Drittland (Staaten außerhalb des Europäischen
          Wirtschaftsraums) oder an eine internationale Organisation
          übermittelt?
        </h2>
        <p>
          Eine Übermittlung in ein Drittland (Staaten außerhalb des Europäischen
          Wirtschaftsraums) oder an eine internationale Organisation gem.
          Kapitel 5 DSGVO erfolgt ohne Ihre ausdrückliche Zustimmung nicht.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold my-4">
          8. Wie lange werden Ihre Daten gespeichert?
        </h2>
        <p>
          Wir verarbeiten und speichern Ihre personenbezogenen Daten, solange es
          für die Erfüllung unserer vertraglichen und/oder gesetzlichen
          Pflichten und zur Aufgabenerfüllung erforderlich ist. Dieser Zeitraum
          ist beschränkt auf die Dauer, in der die Aufgaben ausgeführt werden.
        </p>
        <p>
          Darüber hinaus unterliegen wir verschiedenen Aufbewahrungs- und
          Dokumentationspflichten, die sich u.a. aus handelsrechtlichen und
          steuerrechtlichen Vorschriften ergeben. Sofern diese zur Anwendung
          kommen, kann die Speicherung von Daten bis zu zehn Jahre, beginnend
          mit dem Schluss des Kalenderjahres, in dem die Daten bereitgestellt
          wurden, betragen, auch wenn die Ausführung der Aufgaben, für deren
          Erfüllung die Daten erhoben, gespeichert und verarbeitet wurden, schon
          vorher beendet wurde.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold my-4">
          9. Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </h2>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
          an uns. Bitte beachten Sie, dass der Widerruf erst für die Zukunft
          wirkt. Verarbeitungen, die vor dem Widerruf erfolgt sind, sind davon
          nicht betroffen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt daher vom Widerruf unberührt.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold my-4">
          10. Welche Datenschutzrechte haben Sie?
        </h2>
        <p>
          Jede betroffene natürliche Person hat das Recht auf Auskunft nach Art.
          15 DSGVO, das Recht auf Berichtigung nach Art. 16 DSGVO, das Recht auf
          Löschung nach Art. 17 DSGVO, das Recht auf Einschränkung der
          Verarbeitung nach Art. 18 DSGVO und das Recht auf Datenübertragbarkeit
          aus Artikel 20 DSGVO.
        </p>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className="text-2xl font-semibold my-4">
          11. Inwieweit gibt es eine automatisierte Entscheidungsfindung
          (einschließlich Profiling)?
        </h2>
        <p>
          Wir nutzen keine vollautomatisierte Entscheidungsfindung gemäß Artikel
          22 DSGVO. Wir verarbeiten Ihre personenbezogenen Daten auch nicht mit
          dem Ziel, bestimmte Aspekte zu bewerten (Profiling).
        </p>
      </section>
      <section className="my-4 space-y-4 mt-12">
        <p>
          Die nachfolgenden Hinweise betreffen die einzelnen
          Datenverarbeitungsvorgänge bei der Nutzung der von telli betriebenen
          Webseiten.
        </p>

        <h2 className="text-2xl font-semibold my-4">1. Server-Log-Dateien</h2>
        <p>
          Der technische Dienstleister der Seiten erhebt und speichert
          automatisch Informationen in so genannten Server-Log-Dateien, die Ihr
          Browser automatisch an uns übermittelt. Dies sind:
        </p>

        <ul className="list-disc ml-6">
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse, anonymisiert</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen.
        </p>
        <p>
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Der technische Dienstleister hat ein berechtigtes
          Interesse an der technisch fehlerfreien Darstellung und der
          Optimierung unserer Webseiten – hierzu müssen die Server-Log-Files
          erfasst werden.
        </p>

        <h2 className="text-2xl font-semibold my-4">2. Cookies</h2>
        <p>
          Wir verwenden notwendige Cookies, die die Kernfunktionen der Webseite
          sicherstellen und die daher nicht ausgeschaltet werden können.
        </p>
        <p>
          Daneben verwenden von uns eingebundene Dienste gegebenenfalls Cookies,
          die erst auf der Grundlage Ihrer aktiven Zustimmung in unserem Cookie
          Consent Manager aktiviert werden.
        </p>

        <h2 className="text-2xl font-semibold my-4">
          3. Anfrage per E-Mail, Telefon oder Telefax
        </h2>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
          bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
          Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
          Aufbewahrungsfristen – bleiben unberührt.
        </p>
      </section>
      <section className="my-4 mt-12 space-y-4">
        <h2 className={h2ClassName}>Urheberrecht</h2>
        <p>
          © FWU Institut für Film und Bild in Wissenschaft und Unterricht
          gemeinnützige GmbH– alle Rechte vorbehalten.
        </p>
        <p>
          Falls nicht anders angegeben, unterliegen alle Seiten des Webangebots
          von telli dem Urheberrecht (Copyright). Dies gilt insbesondere für
          Texte, Bilder, Grafiken, Ton-, Video- oder Animationsdateien
          einschließlich deren Anordnung auf den Webseiten. Eine
          Vervielfältigung oder Verwendung solcher Seiten (oder Teilen davon) in
          anderen elektronischen oder gedruckten Publikationen und deren
          Veröffentlichung (auch im Internet) ist nur nach vorheriger
          Genehmigung gestattet. Die Genehmigung zur Publikation der Webseiten
          kann telli erteilen. Weiterhin können Bilder, Grafiken, Text- oder
          sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter
          unterliegen.
        </p>
        <p>
          Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
          geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
          Bestimmungen des jeweils gültigen Kennzeichenrechts und den
          Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund
          der bloßen Nennung in unserem Internetangebot ist nicht der Schluss zu
          ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind.
        </p>
      </section>
      <section className="my-4 mt-12 space-y-4">
        <h2 className={h2ClassName}>Haftungsausschluss</h2>
        <p>
          telli hat alle in seinem Bereich bereitgestellten Informationen nach
          bestem Wissen und Gewissen erarbeitet und geprüft. Es wird jedoch
          keine Gewähr für die Aktualität, Richtigkeit, Vollständigkeit oder
          Qualität und jederzeitige Verfügbarkeit der bereit gestellten
          Informationen übernommen. Unbeschadet der Regelungen des § 675 Absatz
          2 BGB gilt für das bereitgestellte Informationsangebot folgende
          Haftungsbeschränkung: telli und seine Bediensteten haften nicht für
          Schäden, die durch die Nutzung oder Nichtnutzung der im
          Internetangebot von telli angebotenen Informationen entstehen. Für
          etwaige Schäden, die beim Aufrufen oder Herunterladen von Daten durch
          Computerviren oder der Installation oder Nutzung von Software
          verursacht werden, wird nicht gehaftet.
        </p>
        <p>
          Namentlich gekennzeichnete Internetseiten geben die Auffassungen und
          Erkenntnisse der abfassenden Personen wieder.
        </p>
        <p>
          telli behält es sich ausdrücklich vor, einzelne Webseiten oder das
          gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,
          zu löschen oder die Veröffentlichung zeitweise oder endgültig
          einzustellen.
        </p>
        <p>
          Wir betonen ausdrücklich, dass wir keinerlei Einfluss auf die aktuelle
          sowie zukünftige Gestaltung und die Inhalte externer Internetseiten
          haben. Deshalb distanzieren wir uns hiermit ausdrücklich von den
          Inhalten aller externen Internetseiten, auf die wir auf unserer
          Website verweisen. Die Inhalte externer Internetseiten machen wir uns
          nicht zu Eigen. Diese Erklärung gilt für alle Seiten dieser Homepage
          und der dort angebrachten Links. Für illegale, fehlerhafte oder
          unvollständige Informationen sowie insbesondere für Schäden durch die
          Nutzung der gelinkten Seiten haftet ausschließlich der Anbieter der
          Seite, auf welche verwiesen wird, nicht derjenige, der über Links
          lediglich auf die jeweilige Veröffentlichung verweist.
        </p>
      </section>
    </div>
  );
}
