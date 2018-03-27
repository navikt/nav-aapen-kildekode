import {
  LOAD_CONFIG_SUCCESS,
  LOAD_TEAM_SUCCESS,
  LOAD_TEAMS_SUCCESS
} from './actions';

function asMap (teams) {
  const map = {}
  teams.forEach((team) => {
    map[team.slug] = team
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
          items: action.teams.map(team => team.slug)
        },
        teamsBySlug: asMap(action.teams)
      }
    case LOAD_TEAM_SUCCESS:
      return {
        ...state,
        teamsBySlug: {
          ...state.teamsBySlug,
          [action.team.slug]: action.team
        }
      }
    default:
      return state
  }
}
