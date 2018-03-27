import createApp from 'github-app'
import * as config from '../config'

const cert = Buffer.from(config.getConfig('GITHUB_APP_PRIVATE_KEY_PEM'), 'base64')

const githubClient = createApp({
  id: config.getConfig('GITHUB_APP_ID'),
  cert
})

export const getInstallationClient = async () =>
  githubClient.asInstallation(parseInt(config.getConfig('GITHUB_APP_INSTALLATION_ID'), 10))
