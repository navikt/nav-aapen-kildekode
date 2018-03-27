import express from 'express'
import { getInstallationClient } from './githubClient'
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
    console.error('Could not get teams', error);
    res.status(500).json({ message: 'Could not get teams' })
  }
})

router.get('/teams/:key', (req, res) => res.send({
  key: req.params.key,
  name: 'Teamnavn',
  repositories: [{
    key: 'foo',
    name: 'foo-test-app'
  }]
}))

export default router
