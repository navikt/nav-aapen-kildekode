import * as React from 'react'
import Layout from '../components/layout'

const VimeoEmbed = (props: { src: string }) => (
  <iframe
    src={props.src}
    width="640"
    height="360"
    frameBorder="0"
    allowFullScreen={true}
  />
)

export default () => (
  <Layout page="presentasjoner" title="Presentasjoner">
    <div className="container mt-3">
      <h1>Presentasjoner</h1>
      <article>
        <h2>En reise i systemene bak verdens beste velferdsstat: Terje Heen, Truls Jørgensen</h2>
        <p>JavaZone 2017, presentert av Terje Heen og Truls Jørgensen</p>
        <VimeoEmbed src="https://player.vimeo.com/video/233628961" />
        <p>
          Vi liker å skryte av at Norge har verdens beste velferdsordninger. Vi har blant annet ordninger som dagpenger,
          arbeidsavklaringspenger, sykepenger, pensjon, barnetrygd og kontantstøtte.<br />
          Våre systemer modellerer hver sin bit av velferdsstaten - med lover og regler som er under konstant endring.
          Til sammen utgjør disse systemene et av de største og dessverre mest komplekse IT-landskapene i Norge.
        </p>
        <p>
          Noen av systemene har NAV arvet fra sine foreldre Aetat og Rikstrygdeverket. Noen systemer har vi kjøpt som
          hyllevare og tilpasset til det ugjenkjennelige. Noen systemer har andre laget for oss, og nå har vi begynt
          å lage noen systemer selv også.
        </p>
        <p>
          NAV har satt ny og ambisiøs kurs, og vi ønsker å fortelle hvordan den ser ut med fokus på
          applikasjonsarkitekturen. Men for å forstå hvor vi skal, er det nyttig å reflektere litt over hvordan vi har
          havnet der vi er nå.
        </p>
        <p>
          Alle våre 300-ish ulike datasystemer har mye historikk. De ble alle realisert med de beste intensjoner
          og med en teknologi som var relativt moderne da de ble unnfanget. I dag har vi derfor ikke bare
          lettvektsapplikasjoner kjørende i Kubernetesclustre og hippe React/Redux-frontends. Vi har Cobol, ESB,
          Oracle Forms, PL/SQL og applikasjonsservere. Vi har JSF, Wicket og Angular.
        </p>
        <p>
          I denne presentasjon vil vi ta dere med på innsiden i NAV, og fortelle litt om disse systemene og deres
          historikk, og dele noen tanker om hvor vi er på vei, og hvorfor vi tror dette er riktig.
        </p>
      </article>

      <article>
        <h2>Fra Plan-Build-Run til kontinuerlig leveranse i NAV: Trond Arve Wasskog</h2>
        <p>JavaZone 2017, presentert av Trond Arve Wasskog</p>
        <VimeoEmbed src="https://player.vimeo.com/video/233792237" />
          <p>
            NAV IT reorganiserer fra en Plan-Build-Run-tilnærming til en organisering som åpner for dedikerte
            utviklingsteam og kontinuerlige leveranser. Applikasjonsporteføljen strekker seg fra Infotrygd på
            stormaskin med røtter fra 1976, via komplekse Oracle og J2EE-løsninger, til moderne webapplikasjoner.
            Hva betyr denne nye retningen for forvaltning av de eksisterende applikasjonene samtidig som det foregår
            omfattende nyutvikling? Hvilke teknikker og tiltak har vi satt i gang og i hvilken grad er det mulig å få
            til kontinuerlig leveranse i dette landskapet?
          </p>
      </article>

      <article>
        <h2>Hva kjennetegner en moderne applikasjonsplattform?</h2>
        <p>JavaZone 2017, presentert av Audun Fauchald Strand</p>
        <VimeoEmbed src="https://player.vimeo.com/video/234013062" />
        <p>
          Denne presentasjonen er for utviklere som har noe erfaring med å jobbe med store og distribuerte arkitekturer,
          og vil lære om hvordan de kan gjøre det enklere med å lage en sterk applikasjonsplattform. Du vil lære om
          docker, kubernetes og kontinuerlig utvikling.
        </p>
        <p>
          Jeg vil fortelle om hva jeg har lært av å lage, og forsøke å lage en sterk applikasjonsplattform tre ganger
          i forskjellige bedrifter.
        </p>
      </article>
    </div>
  </Layout>
)
