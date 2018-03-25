import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import * as React from 'react'
import Layout from '../components/layout'

export default class Teams extends React.Component {
  public static async getInitialProps () {
    const res = await fetch('http://localhost:3000/api/teams')
    const json = await res.json()
    return { teams: json }
  }

  public render () {
    return (
      <Layout page="teams" title="Teams">
        <div className="container">
          <h1>Teams at NAV</h1>
          {this.props.teams.map((team) => (
            <div key={team.key}>
              <h2><Link href={'/teams/' + team.key}><a>{team.name}</a></Link></h2>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}
