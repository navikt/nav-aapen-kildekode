import Link from 'next/link'
import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import app from '../containers/app'
import { loadAllRepositories } from '../state/actions'

function mapStateToProps (state) {
  return {
    repositories: state.repositories.items
      .map((id) => state.repositoriesById[id])
      .sort((a, b) => a.name.toLocaleUpperCase() > b.name.toLocaleUpperCase() ? 1 : -1)
  }
}

function TravisBadge (props: { slug: string, defaultBranch: string }) {
  return (
    <a href={'https://travis-ci.org/' + props.slug}>
      <img src={'https://travis-ci.org/' + props.slug + '.svg?branch=' + props.defaultBranch} />
    </a>
  )
}

export default app(connect(mapStateToProps)(class Teams extends React.Component {
  public static async getInitialProps ({ store }) {
    return store.dispatch(loadAllRepositories())
  }

  public render () {
    return (
      <Layout page="repositories" title="Kodebaser">
        <div className="container">
          <h1>Alle kodebaser</h1>
          {this.props.repositories.map((repo) => (
            <div key={repo.id}>
              <h2>
                <Link href={repo.html_url}><a>{repo.name}</a></Link>
                {' '}
                {repo.private && '(lukket)'}
                {' '}
                {repo.travis && <TravisBadge slug={repo.travis} defaultBranch={repo.default_branch} />}
              </h2>
              <p>{repo.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}))
