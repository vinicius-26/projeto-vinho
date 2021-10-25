

import { useState } from 'react';
import { NavBar } from '../components/PageHeader/NavBar'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const [isNavBarVisible, SetIsNavBarVisible] = useState(true);

  function NavBarInvisible(){
    SetIsNavBarVisible(false)
  }

  return (
   <div>
      <title>Projeto Vinho</title>
      {isNavBarVisible ? <NavBar NavBarInvisible={NavBarInvisible}/> : null}
      <Component {...pageProps} />
      
    </div>
  )}

export default MyApp
