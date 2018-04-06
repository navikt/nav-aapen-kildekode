import Head from 'next/head'
import Link from 'next/link'
import Login from './login'
import Logo from './logo'

const MenuItem = (props: { href: string, name: string, isCurrent: boolean }) => (
  <li className={'nav-item' + (props.isCurrent ? ' active' : '')}>
    <Link href={props.href}>
      <a className="nav-link" href="#">
        {props.name} {props.isCurrent && <span className="sr-only">(nåværende)</span>}
        </a>
    </Link>
  </li>
)

export default (props: {
  page: string,
  title: string,
  children: any
}) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      />
    </Head>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo style={{ height: '36px' }} className="pr-3" />
      <Link href="/"><a className="navbar-brand">Åpen kildekode</a></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Åpne/lukke meny"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <MenuItem href="/" name="Utforsk" isCurrent={props.page === 'index'}/>
          <MenuItem href="/teams" name="Avdelinger" isCurrent={props.page === 'teams'}/>
          <MenuItem href="/repositories" name="Kodebaser" isCurrent={props.page === 'repositories'}/>
          <MenuItem href="/ordbok" name="Ordbok" isCurrent={props.page === 'ordbok'}/>
          <MenuItem href="/presentasjoner" name="Presentasjoner" isCurrent={props.page === 'presentasjoner'}/>
        </ul>
        <Login />
      </div>
    </nav>
    {props.children}
  </div>
  )
