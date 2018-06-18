import createApp from 'github-app'
import * as config from '../config'
import fs from 'fs';

const cert = fs.readFileSync(config.getConfig('GITHUB_APP_PRIVATE_KEY_PATH'));

const githubClient = createApp({
  id: config.getConfig('GITHUB_APP_ID'),
  cert
})

export const getInstallationClient = async () =>
  githubClient.asInstallation(parseInt(config.getConfig('GITHUB_APP_INSTALLATION_ID'), 10))

export async function fetchAll (client, method) {
  let response = await method({per_page: 100})
  let {data} = response
  while (client.hasNextPage(response)) {
    response = await client.getNextPage(response)
    data = data.concat(response.data)
  }
  return data
}
