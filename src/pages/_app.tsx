import { NavBar } from '../components/PageHeader/NavBar'
import {Head} from 'next/document'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
   <html>
      <title>Projeto Vinho</title>
      {/* <NavBar/> */}
    
      <Component {...pageProps} />
    </html>
  )}

export default MyApp
