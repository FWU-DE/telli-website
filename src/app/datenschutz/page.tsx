import LegalNavbar from "@/components/legal-navbar";
import { TELLI_WEBSITE_URL, TELLI_CHATBOT_URL } from "@/utils/const";
import { cn } from "@/utils/tailwind/cn";
import { h1ClassName, h2ClassName } from "@/utils/tailwind/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <LegalNavbar />
      <h1 className={h1ClassName}>Datenschutzerklärung</h1>
      <em className="text-sm mb-8">Stand: 10. Februar 2025</em>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>1. Datenschutz</h2>
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
            Diese Datenschutzerklärung gilt für:{" "}
          </span>
          <ul className="list-disc pl-4">
            <li>den <span className="font-bold">Webauftritt von telli</span> <Link
              href={TELLI_WEBSITE_URL}
              className="text-[rgba(2,165,155,1)] underline"
            >
              {TELLI_WEBSITE_URL}
            </Link> und</li>
            <li><span className="font-bold">telli Dialog</span> <Link
              href={TELLI_CHATBOT_URL}
              className="text-[rgba(2,165,155,1)] underline"
            >
              {TELLI_CHATBOT_URL}
            </Link></li>
          </ul>
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
        <h2 className={cn(h2ClassName, "mb-4")}>
          2. Hinweis zur verantwortlichen Stelle
        </h2>
        <h3 className="text-xl font-semibold">
          Webauftritt von telli
        </h3>
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
        <h3 className="text-xl font-semibold">
          telli Dialog
        </h3>
        <p>Verantwortlicher ist hier Ihre Schule bzw. der jeweilige Schulträger. Bei der Nutzung von telli Dialog von telli. Das FWU ist Auftragsdatenverarbeiter.</p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          3. Welche Quellen und Daten nutzen wir?
        </h2>
        <h3 className="text-xl font-semibold">
          Webauftritt
        </h3>
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
        <h3 className="text-xl font-semibold">
          telli Dialog
        </h3>
        <p>telli wird an VIDIS angebunden, dem „Vermittlungsdienst für das digitale Identitätsmanagement in Schulen“, einem Single-Sign-On für Schulen. VIDIS stellt die bestehenden schulischen Zugangsmöglichkeiten der Nutzerinnen und Nutzer zur Verfügung. VIDIS übernittelt an telli folgenden personenbezogene Daten: Identifikator, Rolle (Unterscheidung Lehrkraft/Schüler/-in), Schulidentifikator, Gerätedaten, IP-Adresse, Log-Daten.</p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          4. Wofür verarbeiten wir Ihre Daten (Zweck der Verarbeitung) und auf
          welcher Rechtsgrundlage?
        </h2>
        <h3 className="text-xl font-semibold">
          Webauftritt
        </h3>
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
        <h3 className="text-xl font-semibold">
          telli Dialog
        </h3>
        <p>a) Die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde (Art. 6 Abs. 1 lit. c DSGVO)</p>
        <p>b) Die Verarbeitung von personenbezogenen Daten erfolgt im Rahmen von telli Dialog zur Erfüllung des staatlichen Bildungs- und Erziehungsauftrags. Die Rechtsgrundlage für die Verarbeitung von Daten durch die Schule mittels telli ergibt sich aus Art. 6 Abs. 1 lit. e DSGVO in Verbindung mit dem Erziehungs- und Bildungsauftrag der Landesschulgesetze.</p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          5. Gibt es für Sie eine Pflicht zur Bereitstellung von Daten?
        </h2>
        <h3 className="text-xl font-semibold">
          Webauftritt
        </h3>
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
        <h3 className="text-xl font-semibold">
          telli Dialog
        </h3>
        <p>Im Rahmen des Schulunterrichts haben die Nutzer von telli Dialog diejenigen personenbezogenen Daten bereitzustellen, die für die Erfüllung der Erziehungs- und Bildungsauftrags erforderlich sind.</p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          6. Wer bekommt Ihre Daten?
        </h2>
        <h3 className="text-xl font-semibold">
          Webauftritt von telli und telli Dialog
        </h3>
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
          <li>
            DeutschlandGPT GmbH, Gabriele-Münter-Straße 3, 82110 Germering, Germany
          </li>
          <li>
            IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany
          </li>
          <li>
            Akenes SA trading („Exoscale“), Boulevard de Grancy 19A, 1006 Lausanne, Switzerland
          </li>
          <li>
            Microsoft Ireland Operations Ltd, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland
          </li>
        </ul>
        <p>
          Als Dienstleister von telli entwickelt die DeutschlandGPT GmbH telli,
          und kommt dadurch mit Ihren Daten und Erklärungen in Berührung. Eine
          entsprechende Vereinbarung zur Verarbeitung personenbezogener Daten
          mit der DeutschlandGPT GmbH zum Schutz sämtlicher Daten liegt vor.
        </p>
        <p>Als technischer Dienstleister des FWU nimmt IONOS SE, Anbieter von Cloud- Infrastruktur, Cloud-Services und Hosting-Dienstleistungen, Ihre Daten und Erklärungen entgegen, diese Daten werden auf Servern der IONOS SE gespeichert. Eine entsprechende Vereinbarung zur Verarbeitung personenbezogener Daten mit IONOS SE zum Schutz sämtlicher Daten liegt vor.</p>
        <p>Als technischer Dienstleister des FWU nimmt die Akenes SA trading as Exoscale, Anbieter von Cloud- Infrastruktur, Cloud-Services und Hosting-Dienstleistungen, Ihre Daten und Erklärungen entgegen, diese Daten werden auf Servern der Akenes SA trading as Exoscale gespeichert. Eine entsprechende Vereinbarung zur Verarbeitung personenbezogener Daten mit Exoscale zum Schutz sämtlicher Daten liegt vor.</p>
        <p>Als technischer Dienstleister von telli nimmt die Microsoft Ireland Operations Ltd, Anbieter von Cloud- Infrastruktur, Cloud-Services und Hosting-Dienstleistungen, Ihre Daten und Erklärungen entgegen, diese Daten werden auf Servern der Microsoft Ireland Operations Ltd, gespeichert. Eine entsprechende Vereinbarung zur Verarbeitung personenbezogener Daten zum Schutz sämtlicher Daten liegt vor.</p>
        <p>
          An weitere Datenempfänger außerhalb von telli geben wir Daten zu
          anderen als den in diesen Hinweisen genannten Zwecken nur weiter,
          sofern gesetzliche Bestimmungen dies erlauben oder gebieten, Sie Ihre
          Einwilligung zur Datenübermittlung erteilt haben oder wir zur
          Erteilung einer Auskunft befugt sind.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          7. Werden Daten in ein Drittland (Staaten außerhalb des Europäischen
          Wirtschaftsraums) oder an eine internationale Organisation
          übermittelt?
        </h2>
        <h3 className="text-xl font-semibold">
          Webauftritt von telli und telli Dialog
        </h3>
        <p>
          Eine Übermittlung in ein Drittland (Staaten außerhalb des Europäischen
          Wirtschaftsraums) oder an eine internationale Organisation gem.
          Kapitel 5 DSGVO erfolgt ohne Ihre ausdrückliche Zustimmung nicht. Die eingesetzten LLM werden lokal gehostet und betrieben.
        </p>
      </section>

      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
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
        <h2 className={cn(h2ClassName, "mb-4")}>
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
        <h2 className={cn(h2ClassName, "mb-4")}>
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
        <h2 className={cn(h2ClassName, "mb-4")}>
          11. Inwieweit gibt es eine automatisierte Entscheidungsfindung
          (einschließlich Profiling)?
        </h2>
        <p>
          Wir nutzen keine vollautomatisierte Entscheidungsfindung gemäß Artikel
          22 DSGVO. Wir verarbeiten Ihre personenbezogenen Daten auch nicht mit
          dem Ziel, bestimmte Aspekte zu bewerten (Profiling).
        </p>
      </section>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          12. Cookies
        </h2>
        <h3 className="text-xl font-semibold">
          telli Dialog
        </h3>
        <p>Die nachfolgenden Hinweise betreffen die einzelnen Datenverarbeitungsvorgänge bei der Nutzung der von telli Dialog unter Verwendung von VIDIS.</p>
        <p>Der technische Dienstleister für die Dienste von telli erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die der Browser automatisch an telli übermittelt. Dies sind:</p>
        <ul className="list-disc ml-6">
          <li>
            Browsertyp und Browserversion
          </li>
          <li>
            verwendetes Betriebssystem
          </li>
          <li>
            Referrer URL
          </li>
          <li>
            Hostname des zugreifenden Rechners
          </li>
          <li>
            Uhrzeit der Serveranfrage
          </li>
          <li>IP-Adresse, anonymisier</li>
        </ul>
        <p>Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr von Angriffsversuchen, werden diese Daten vom FWU gespeichert. Nach spätestens sieben Tagen werden die Daten gelöscht, so dass es nicht mehr möglich ist, einen Bezug auf einzelne Nutzende herzustellen; ein Abgleich mit anderen Datenbeständen oder eine Weitergabe an Dritte, auch in Auszügen, findet nicht statt. Diese Datenverarbeitung dient der nach Art. 6 Abs. 1 lit e DS-GVO bestimmten Pflicht, jederzeit nachvollziehen zu können, wer wann Änderungen an den Daten vorgenommen hat.</p>
        <p>Die Leistungen von telli Dialog werden mit dem Single-Sign-On des FWU, VIDIS, erbracht (www.vidis.schule). Folgende technisch-notwendigen Cookies werden von telli Dialog gespeichert und übermittelt:</p>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Anbieter</th>
              <th className="px-4 py-2">Zweck</th>
              <th className="px-4 py-2">Ablauf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">Host-authjs.csrf-token</td>
              <td className="px-4 py-2 border-b border-gray-200"><a href="https://chat.telli.schule" className="text-blue-600 hover:text-blue-800">chat.telli.schule</a></td>
              <td className="px-4 py-2 border-b border-gray-200">Vermeidung von Cross-Site-Request-Forgery Angriffen</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">Secure-authjs.callback-url</td>
              <td className="px-4 py-2 border-b border-gray-200"><a href="https://chat.telli.schule" className="text-blue-600 hover:text-blue-800">chat.telli.schule</a></td>
              <td className="px-4 py-2 border-b border-gray-200">Authentifizierung mit VIDIS</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">Secure-authjs.session-token</td>
              <td className="px-4 py-2 border-b border-gray-200"><a href="https://chat.telli.schule" className="text-blue-600 hover:text-blue-800">chat.telli.schule</a></td>
              <td className="px-4 py-2 border-b border-gray-200">Authentifizierung mit VIDIS</td>
              <td className="px-4 py-2 border-b border-gray-200">8 Stunden</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">last-used-model</td>
              <td className="px-4 py-2 border-b border-gray-200"><a href="https://chat.telli.schule" className="text-blue-600 hover:text-blue-800">chat.telli.schule</a></td>
              <td className="px-4 py-2 border-b border-gray-200">Verbesserte UX bei Chatwechsel</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
          </tbody>
        </table>
        <p>Folgende technisch-notwendigen Cookies werden von VIDIS gespeichert und übermittelt:</p>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Anbieter</th>
              <th className="px-4 py-2">Zweck</th>
              <th className="px-4 py-2">Ablauf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">AUTH_SESSION_ID_LEGACY</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Dieses Cookie ist für die Login-Funktion erforderlich</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">AUTH_SESSSION_ID</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Dieses Cookie ist für die Login-Funktion erforderlich</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">AKEYCLOAK_IDENTITY_LEGACY</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Die ID der aktuellen Nutzenden</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">KEYCLOAK_IDENTITY</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Die ID der aktuellen Nutzenden</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">KEYCLOAK_SESSION_LEGACY</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Die ID der aktuellen Browsersitzung</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">KEYCLOAK_SESSION</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Die ID der aktuellen Browsersitzung</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">XSRF-TOKEN</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Gewährleistet die Sicherheit der Besucherinnen und Besucher beim Surfen, indem es Cross-Site Request Forgery verhindert</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">KC_RESTART</td>
              <td className="px-4 py-2 border-b border-gray-200">Keycloak</td>
              <td className="px-4 py-2 border-b border-gray-200">Identifiziert eingeloggte Benutzende</td>
              <td className="px-4 py-2 border-b border-gray-200">Session</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-semibold">
          Webauftritt von telli
        </h3>
        <p>
          Die nachfolgenden Hinweise betreffen die einzelnen
          Datenverarbeitungsvorgänge bei der Nutzung der von telli betriebenen
          Webseiten.
        </p>

        <h4 className="my-4">1. Server-Log-Dateien</h4>
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
      </section>
      <section className="my-4 space-y-4">
        <h2 className={cn(h2ClassName, "mb-4")}>
          13. Anfrage per E-Mail, Telefon oder Telefax
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
    </div>
  );
}
