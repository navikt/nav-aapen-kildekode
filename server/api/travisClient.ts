import fetch from 'node-fetch'

export async function fetchTravisRepositories (organization: string) {
  const response = await fetch('https://api.travis-ci.org/owner/' + organization + '/repos?limit=10000', {
    headers: {
      'Travis-API-Version': '3'
    }
  })
  const data = await response.json()
  return data
}

export async function fetchTravisRepositoriesMap (organization: string) {
  const response = await fetchTravisRepositories(organization)
  const data = {}
  response.repositories.forEach(repo => {
    if (repo.active) {
      data[String(repo.github_id)] = repo
    }
  })
  return data
}

fetchTravisRepositories('navikt').then(res => {
  console.log('repos', res)
}).catch(console.error)
