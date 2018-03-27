import Link from 'next/link'
import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import app from '../containers/app'
import { loadTeam } from '../state/actions'

function mapStateToProps (state) {
  if (state.query.key && state.teamsBySlug[state.query.key]) {
    return state.teamsBySlug[state.query.key]
  } else {
    return {
      name: '',
      repositories: []
    }
  }
}

export default app(connect(mapStateToProps)(class Team extends React.Component {
  public static async getInitialProps (data) {
    const { query, store } = data
    const teamKey = query.key
    await store.dispatch(loadTeam(teamKey))
  }

  public render () {
    return (
      <Layout page="team" title={this.props.name || 'Team'}>
        <div className="container">
          <h1>Avdeling: {this.props.name}</h1>
          {this.props.repositories.map((repo) => (
            <div key={repo.slug}>
              <h2><Link href={'/repository/' + repo.key}><a>{repo.name}</a></Link></h2>
            </div>
          ))}
        </div>
    </Layout>)
  }
}))
