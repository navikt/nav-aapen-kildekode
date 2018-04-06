import Link from 'next/link'
import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import app from '../containers/app'
import { loadTeam } from '../state/actions'

function mapStateToProps (state) {
  if (state.query.key && state.teamsById[String(state.query.key)]) {
    const { id, name, repositories } = state.teamsById[String(state.query.key)]
    return {
      id,
      name,
      repositories: repositories.map((repoId) => state.repositoriesById[String(repoId)])
    }
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
            <div key={repo.id}>
              <h2><Link href={repo.html_url}><a>{repo.name}</a></Link></h2>
            </div>
          ))}
        </div>
    </Layout>)
  }
}))
