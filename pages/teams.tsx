import Link from 'next/link'
import * as React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import app from '../containers/app'
import { loadTeams } from '../state/actions'

function mapStateToProps (state) {
  return {
    teams: state.teams.items.map((slug) => state.teamsBySlug[slug])
  }
}

export default app(connect(mapStateToProps)(class Teams extends React.Component {
  public static async getInitialProps ({ store }) {
    return store.dispatch(loadTeams())
  }

  public render () {
    return (
      <Layout page="teams" title="Teams">
        <div className="container">
          <h1>Teams at NAV</h1>
          {this.props.teams.map((team) => (
            <div key={team.slug}>
              <h2><Link href={'/teams/' + team.slug}><a>{team.name}</a></Link></h2>
              <p>{team.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}))
