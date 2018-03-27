import { loadConfig, route } from './actions'

export const initialLoad = ({ pathname, query }) => async (dispatch) => {
  dispatch({ type: 'ROUTE', pathname, query })
  return dispatch(loadConfig())
}
