import * as React from 'react'
import Layout from '../components/layout'

// tslint:disable object-literal-sort-keys
const terms: {} = {
  'AD': 'Active Directory, som utviklere bruker til å logge på interne tjenester',
  'adeo.no': 'Et internt domene som vi bruker til utvikling. Ikke tilgjengelig utenfor NAVs interne nettverk.',
  'Arena': '...',
  'ATOM': 'Applikasjonstjenere og meldingsflyt',
  'AURA': 'Automatisk Utrulling av Applikasjoner',
  'BFS': 'Beslutningsstøtte for sykmeldere',
  'Bisys': 'Saksbehandlingssystem for behandling av blant annet bidrags-, forskudds- og farskapssaker',
  'devillo.no': 'Et internt domene som vi bruker til utvikling. Ikke tilgjengelig utenfor NAVs interne nettverk.',
  'DigiSYFO': 'Digitalisering av sykefraværsoppfølging',
  'DSF': 'Det Sentrale Folketrygdsystemet. En applikasjon som ble brukt fra 1967 til 2018. Utviklet i PL/I. ' +
  'Nå erstattet av Presys.',
  'EESSI': 'Electronic Exchange of Social Security Information',
  'Fasit': 'En intern key/value-database som vi bruker til å håndtere informasjon om deployment av applikasjoner',
  'FO': 'Forenklet Oppfølging',
  'FP': 'Foreldrepenger',
  'Gosys': (
    <React.Fragment>
      <p>
        Gosys er et system som sørger for systemstøtte til oppgavedelingen og grensesnittet mellom enheter i NAV.
        Systemet muliggjør samhandling mellom enheter i NAV gjennom status på oppgaver og hvem som håndterer denne,
        samt relasjonen mellom NAV og bruker gjennom status på sak og oppgaver knyttet til bruker.
        Gosys samhandler med en rekke andre komponenter og systemer, herunder ulike fagsystemer, registre og databaser,
        samt løsninger for dokumenthåndtering og arkiv. Systemet er klassifisert som et fellessystem, ikke et fagsystem.
      </p>
      <p>
        Hovedfunksjonalitet Gosys tilbyr er oppgaveliste, journalføring av søknader og brev, dokumentoversikt,
        arkiv, saksliste, personopplysninger, arbeidsgiveroversikt.
      </p>
    </React.Fragment>
  ),
  'Gsak': (
    <React.Fragment>
      <p>
        Gsak tilbyr tjenester for oppretting, endring og lagring av oppgaver og henvendelser (kun for arbeidsgiver),
        historikk henvendelse for person og opprette saksreferanse som brukes i Joark. Gsak fungerer som et
        støttesystem for fagsystemene med hensyn på oppgaver og saker.
      </p>
      <p>
        Hovedfunksjonaliteter GSAK tilbyr er lagring av oppgaver for oppgaveliste, lagring av henvendelser,
        inneholder saker med knytning til fagsaker i Arena og Infotrygd, samt saker med manuell referanse
        til saker i andre systemer.
      </p>
    </React.Fragment>
  ),
  'Infotrygd': 'Et system utviklet i COBOL, som kjører i z/OS på stormaskin fra IBM. Systemet ble først tatt i bruk ' +
  'i 1978, og brukes fortsatt.',
  'JoArk': 'Et system for lagring av dokumenter og dokumentinformasjon',
  'MELO': 'Medlemskap og lovvalg',
  'MODIA Brukerdialog': 'En intern arbeidsflate som skal brukes av NAVs veiledere  og saksbehandlere. Applikasjonen ' +
  'gir et samlet sted å finne informasjon om NAV-bruker fra forskjellige baksystemer. ',
  'Nais': 'Den nye skyplattformen som NAV skal kjøre applikasjoner på.',
  'NAV': 'Ny arbeids- og velferdsforvaltning. Ble opprettet 1. juli 2006 ved en sammenslåing av Aetat og Trygdeetaten.',
  'PAM': 'Plattform for Arbeidsmarkedet',
  'Pesys': 'Fagsystem for pensjon. Ble startet i 2008.',
  'Presys': 'Applikasjon utviklet i 2017 for å erstatte DSF. Navnet kommer av at det som vises i applikasjonen er ' +
  'informasjon som fantes før Pesys, altså Pre-Pesys.',
  'POPP': 'POPP (Pensjonfaglig Opptjeningsregister) er et pensjonsfaglig fellesregister i pensjonsløsningen. ' +
  'Formålet med registeret er å lage og forvalte opptjeningsrettigheter til pensjonsytelser, for eksempel ' +
  'pensjonsgivende inntekt (PGI). POPP inneholder både kildeinformasjon og beregnende verdier. Registeret har ' +
  'opplysninger om opptjeninger fra 1967.  Registeret er masterkilde for opptjeningsinnformasjon, og skal benyttes ' +
  'dersom et system har behov for et sanntidsbilde av pensjonsopptjening til en bruker.',
  'SAM': 'Samordningskomponenten',
  'SBL': 'Selvbetjening',
  'SYFO': 'Sykefraværsoppfølging',
  'TP': 'Tjenestepensjon',
  'VEILARB': 'Veiledning og arbeid'
}

const Term = (props: { name: string, children: React.Childen }) => (
  <React.Fragment>
    <dt className="col-sm-2">{props.name}</dt>
    <dd className="col-sm-10">{props.children}</dd>
  </React.Fragment>
)

export default () => (
  <Layout page="ordbok" title="Ordbok">
    <div className="container mt-3">
      <h1>Ordbok</h1>
      <p>
        Det er en del navn og forkortelser som vil gå igjen i kodebasene til NAV; her er
        en oppsummering av noen av dem.
      </p>
      <dl className="row">
        {Object.keys(terms)
          .sort((a, b) => a.toLocaleUpperCase() > b.toLocaleUpperCase() ? 1 : -1)
          .map((key) => (<Term key={key} name={key}>{terms[key]}</Term>))}
      </dl>
    </div>
  </Layout>
)
