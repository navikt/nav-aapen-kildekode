import Link from 'next/link'

export default () => (
  <Link href={'https://github.com/login/oauth/authorize?client_id=' + 'bbf0f9932676203e0059'}>
    <a className="btn btn-outline-primary my-2 my-sm-0">Logg inn</a>
  </Link>
)
