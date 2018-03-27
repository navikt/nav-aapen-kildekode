import {
  LOAD_CONFIG_SUCCESS,
  LOAD_TEAMS_SUCCESS
} from '../actions'
import reducer from '../reducer'
import { initialState } from '../state'

describe('Reducer', () => {
  it('Load config successfully', () => {
    const action = {
      config: {
        foo: 'bar'
      },
      type: LOAD_CONFIG_SUCCESS
    }

    const after = {
      ...initialState,
      config: {
        foo: 'bar'
      }
    }

    expect(reducer(initialState, action)).toEqual(after)
  })

  it('Load list of teams successfully', () => {
    const action = {
      teams: [{
        name: 'The Lannisters',
        slug: 'lannisters'
      }, {
        name: 'The Dothraki',
        slug: 'dothrakis'
      }, {
        name: 'The Starks',
        slug: 'starks'
      }],
      type: LOAD_TEAMS_SUCCESS
    }

    const after = {
      ...initialState,
      teams: {
        items: ['lannisters', 'dothrakis', 'starks'],
        loaded: true,
        loading: false
      },
      teamsBySlug: {
        dothrakis: {
          name: 'The Dothraki',
          slug: 'dothrakis'
        },
        lannisters: {
          name: 'The Lannisters',
          slug: 'lannisters'
        },
        starks: {
          name: 'The Starks',
          slug: 'starks'
        }
      }
    }

    expect(reducer(initialState, action)).toEqual(after)
  })
})
