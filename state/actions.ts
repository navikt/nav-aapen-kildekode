import fetch from 'isomorphic-unfetch'

export const LOAD_CONFIG = 'LOAD_CONFIG'
export const LOAD_CONFIG_SUCCESS = 'LOAD_CONFIG_SUCCESS'
export const LOAD_TEAMS = 'LOAD_TEAMS'
export const LOAD_TEAMS_SUCCESS = 'LOAD_TEAMS_SUCCESS'
export const LOADING_TEAM = 'LOADING_TEAM'
export const LOAD_TEAM_SUCCESS = 'LOAD_TEAM_SUCCESS'
export const LOAD_REPOSITORIES = 'LOAD_REPOSITORIES'
export const LOAD_REPOSITORIES_SUCCESS = 'LOAD_REPOSITORIES_SUCCESS'

export const loadConfig = () => async (dispatch) => {
  dispatch({ type: LOAD_CONFIG })
  const res = await fetch('http://localhost:3000/api/config')
  const config = await res.json()
  dispatch({ type: LOAD_CONFIG_SUCCESS, config })
}

export const loadTeams = () => async (dispatch) => {
  dispatch({ type: LOAD_TEAMS })
  const res = await fetch('http://localhost:3000/api/teams')
  const teams = await res.json()
  dispatch({ type: LOAD_TEAMS_SUCCESS, teams })
}

export const loadTeam = (id) => async (dispatch) => {
  dispatch({ type: LOADING_TEAM })
  const res = await fetch('http://localhost:3000/api/teams/' + id)
  const team = await res.json()
  dispatch({ type: LOAD_TEAM_SUCCESS, team })
}

export const loadAllRepositories = () => async (dispatch) => {
  dispatch({ type: LOAD_REPOSITORIES })
  const res = await fetch('http://localhost:3000/api/repositories')
  const repositories = await res.json()
  dispatch({ type: LOAD_REPOSITORIES_SUCCESS, repositories })
}
