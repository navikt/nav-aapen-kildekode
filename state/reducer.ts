import {
  LOAD_CONFIG_SUCCESS,
  LOAD_REPOSITORIES_SUCCESS,
  LOAD_TEAM_SUCCESS,
  LOAD_TEAMS_SUCCESS
} from './actions';

function asMap (teams, idKey) {
  const map = {}
  teams.forEach((team) => {
    map[String(team[idKey])] = team
  })
  return map
}

export default function reducer (state, action) {
  switch (action.type) {
    case 'ROUTE':
      return {
        ...state,
        pathname: action.pathname,
        query: action.query
      }
    case LOAD_CONFIG_SUCCESS:
      return {
        ...state,
        config: action.config
      }
    case LOAD_TEAMS_SUCCESS:
      return {
        ...state,
        teams: {
          loading: false,
          loaded: true,
          items: action.teams.map(team => team.id)
        },
        teamsById: asMap(action.teams, 'id')
      }
    case LOAD_TEAM_SUCCESS:
      const { id, name, repositories } = action.team
      return {
        ...state,
        teamsById: {
          ...state.teamsById,
          [String(action.team.id)]: { id, name, repositories: repositories.map(repo => repo.id) }
        },
        repositoriesById: {
          ...state.repositoriesById,
          ...asMap(repositories, 'id')
        }
      }
    case LOAD_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: {
          loading: false,
          loaded: true,
          items: action.repositories.map(repo => repo.id)
        },
        repositoriesById: {
          ...state.repositoriesById,
          ...asMap(action.repositories, 'id')
        }
      }
    default:
      return state
  }
}
