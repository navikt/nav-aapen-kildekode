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
        id: 1,
        name: 'The Lannisters',
        slug: 'lannisters'
      }, {
        id: 2,
        name: 'The Dothraki',
        slug: 'dothrakis'
      }, {
        id: 3,
        name: 'The Starks',
        slug: 'starks'
      }],
      type: LOAD_TEAMS_SUCCESS
    }

    const after = {
      ...initialState,
      teams: {
        items: [1, 2, 3],
        loaded: true,
        loading: false
      },
      teamsById: {
        1: {
          id: 1,
          name: 'The Lannisters',
          slug: 'lannisters'
        },
        2: {
          id: 2,
          name: 'The Dothraki',
          slug: 'dothrakis'
        },
        3: {
          id: 3,
          name: 'The Starks',
          slug: 'starks'
        }
      }
    }

    expect(reducer(initialState, action)).toEqual(after)
  })

  it('Load data about a single team', () => {
    const action = {
      team: {
        id: 4,
        name: 'Best Team Ever',
        repositories: [{
          description: 'It is truly fantastic',
          html_url: 'https://github.com/navikt/a-great-application',
          id: 123,
          name: 'a-great-application',
          private: false
        }, {
          description: 'Nobody knows what this library does.',
          html_url: 'https://github.com/navikt/some-random-library',
          id: 456,
          name: 'some-random-library',
          private: false
        }]
      },
      type: 'LOAD_TEAM_SUCCESS'
    }

    const after = {
      ...initialState,
      repositoriesById: {
        123: {
          description: 'It is truly fantastic',
          html_url: 'https://github.com/navikt/a-great-application',
          id: 123,
          name: 'a-great-application',
          private: false
        },
        456: {
          description: 'Nobody knows what this library does.',
          html_url: 'https://github.com/navikt/some-random-library',
          id: 456,
          name: 'some-random-library',
          private: false
        }
      },
      teamsById: {
        4: {
          id: 4,
          name: 'Best Team Ever',
          repositories: [123, 456]
        }
      }
    }

    expect(reducer(initialState, action)).toEqual(after)
  })
})
