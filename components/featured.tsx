import Link from 'next/link'

const CardImage = (props: { style: {} }) => (
  <img
    {...props}
    style={Object.assign({}, {
      display: 'block',
      margin: '0 auto',
      maxHeight: '200px',
      maxWidth: '100%',
      padding: '5px 10px 0'
    }, props.style)}
  />
)

const navFrontendModuler = (
  <div className="card">
    <CardImage src="/static/designutvikling.png" alt="Illustrasjon" />
    <div className="card-body">
      <h5 className="card-title">NAV Designsystem</h5>
      <p className="card-text">
        Dette er en samling av komponenter som brukes i grensesnittet til nav.no.
      </p>
      <Link href="https://navikt.github.io/nav-frontend-moduler/"><a className="card-link">Dokumentasjon</a></Link>
      <Link href="https://github.com/navikt/nav-frontend-moduler"><a className="card-link">Kilde&shy;kode</a></Link>
    </div>
  </div>
)

const nais = (
  <div className="card">
    <CardImage src="/static/nais-logo.png" alt="Nais-logo" style={{ maxHeight: '150px' }} />
    <div className="card-body">
      <h5 className="card-title">Nais</h5>
      <p className="card-text">NAV migrerer applikasjonene sine over på en Kubernetes-basert plattform.</p>
      <Link href="https://nais.github.io/"><a className="card-link">Dokumentasjon</a></Link>
      <Link href="https://github.com/nais"><a className="card-link">Kilde&shy;kode</a></Link>
    </div>
  </div>
)

/* TODO må avklare med ledelsen om vi kan få ha med dette
const mantra = (
  <div className="card text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        NAVs IT-utvikling finansieres av norske skattebetalere.
        Derfor tilhører all kode og dokumentasjon Norges befolkning.
        Den skal være åpen for innsyn, og kunne brukes fritt av andre.
      </p>
      <footer className="blockquote-footer">
        <small>
          Utviklerne i <cite title="Source Title">NAV</cite>
        </small>
      </footer>
    </blockquote>
  </div>
)
*/

const ordbok = (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Ordbok</h5>
      <p className="card-text">
        Det er mye terminologi i NAVs IT-avdeling, som det kan være lurt å kjenne til.
        En del forkortelser går igjen i kildekoden vår.
      </p>
      <Link href="/ordbok"><a className="card-link">Gå til ordboka</a></Link>
    </div>
  </div>
)

const presentasjoner = (
  <div className="card">
    <CardImage src="/static/javazone-presentasjon.png" alt="Illustrasjon" />
    <div className="card-body">
      <h5 className="card-title">Presentasjoner</h5>
      <p className="card-text">
        Vi drar ofte på konferanser, og da holder vi en gang i blant presentasjoner om
        det vi gjør i NAV. Noen av presentasjonene blir i ettertid lagt ut på Internett.
      </p>
      <Link href="/presentasjoner"><a className="card-link">Vis presentasjoner</a></Link>
    </div>
  </div>
)

const jobbannonse = (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Vil du jobbe hos oss?</h5>
      <p className="card-text">
        NAV skal utvikle verdens beste velferdsløsninger - for deg og dine, for NAV og for samfunnet.
        Vi ser etter mennesker som tør å ta det ansvaret.
      </p>
      <Link href="https://www.detsombetyrnoe.no/"><a className="card-link">Om å jobbe i NAV</a></Link>
    </div>
  </div>
)

export default () => (
  <div className="card-columns">
    {/* mantra TODO må avklare med ledelsen om vi kan få ha med dette */}
    {navFrontendModuler}
    {nais}
    {ordbok}
    {presentasjoner}
    {jobbannonse}
  </div>
)
