import '../styles/globals.css'
import '../styles/globalstyle.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
