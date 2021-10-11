

import { NavBar } from '../components/PageHeader/NavBar'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
   <div>
      <title>Projeto Vinho</title>
      <NavBar/>
      <Component {...pageProps} />
      
    </div>
  )}

export default MyApp
