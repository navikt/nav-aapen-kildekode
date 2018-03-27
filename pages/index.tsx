import Featured from '../components/featured'
import Layout from '../components/layout'
import app from '../containers/app'

export default app(() => (
  <Layout page="index" title="NAV – Åpen kildekode">
    <div className="container mt-3">
      <Featured />
    </div>
  </Layout>
))
