import express from 'express'
import { getInstallationClient, fetchAll } from './githubClient'
import * as config from '../config'

const router = new express.Router()

router.get('/', (req, res) => {
  res.send('welcome')
})

router.get('/config', (req, res) => res.send({
  OAUTH_CLIENT_ID: config.getConfig('OAUTH_CLIENT_ID'),
  OAUTH_CALLBACK_URL: config.getConfig('OAUTH_CALLBACK_URL')
}))

router.get('/teams', async (req, res) => {
  try {
    const installationClient = await getInstallationClient()
    const result = await installationClient.orgs.getTeams({ org: config.getConfig('GITHUB_ORG_NAME') })
    res.send(result.data)
  } catch (error) {
    console.error('Could not get teams', error)
    res.status(500).json({ message: 'Could not get teams' })
  }
})

router.get('/teams/:id', async (req, res) => {
  try {
    const id = req.params.id
    const installationClient = await getInstallationClient()
    const [meta, repos] = await Promise.all([
      installationClient.orgs.getTeam({ id }),
      fetchAll(installationClient, (params) => installationClient.orgs.getTeamRepos({ ...params, id }))
    ])
    res.send({
      id,
      repos,
      name: meta.data.name,
      repositories: repos.filter(repo => !repo.private).map(({ id, name, description, html_url }) => ({ id, name, description, html_url }))
    })
  } catch (error) {
    console.error('Could not get team', error)
    res.status(500).json({ message: 'Could not get team' })
  }
})

router.get('/repositories', async (req, res) => {
  try {
    const installationClient = await getInstallationClient()
      const all = await fetchAll(installationClient, (params) =>
    installationClient.repos.getForOrg({
      org: config.getConfig('GITHUB_ORG_NAME'), per_page: 100,
      ...params,
      type: 'public'
    }))
    res.send(all)
  } catch (error) {
    console.error('Could not get all public repositories', error)
    res.status(500).json({ message: 'Could not get public repositories' })
  }
})

export default router
