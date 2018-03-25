import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import * as React from 'react'
import Layout from '../components/layout'

export default class Team extends React.Component {
  public static async getInitialProps ({ req }) {
    const teamKey = req.params.key
    const res = await fetch('http://localhost:3000/api/team/' + teamKey)
    return res.json()
  }

  public render () {
    return (
      <Layout page="team" title={this.props.name}>
        <div className="container">
          <h1>Avdeling: {this.props.name}</h1>
          {this.props.repositories.map((repo) => (
            <div key={repo.key}>
              <h2><Link href={'/repository/' + repo.key}><a>{repo.name}</a></Link></h2>
            </div>
          ))}
        </div>
    </Layout>)
  }
}
