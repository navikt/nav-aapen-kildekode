import { initialLoad } from '../state/initialLoad'
import { initStore } from '../state/store'
import withRedux from '../state/withRedux'

export default (Root) => {
  const _getInitialProps = Root.getInitialProps
  Root.getInitialProps = async (data) => {
    const { store, pathname, query } = data
    await store.dispatch(initialLoad({ pathname, query }))
    if (_getInitialProps) {
      await _getInitialProps(data)
    }
  }
  return withRedux(initStore, null, null)(Root)
}
