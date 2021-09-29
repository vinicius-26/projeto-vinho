import { LoginUsuario } from '../components/Login/Login'
import { CadastroUsuario } from '../components/Login/Cadastro'
import { LandingHome } from '../components/LandingPage/LandingHome'
import { NavBar } from '../components/PageHeader/NavBar'
import CardTanque from '../components/Consultas/tanques/Cardtanque'

export default function Home() {
  return (
   <div className="container">
     <html>
      <NavBar/>
      <CardTanque></CardTanque>
     </html>
   </div>
  )
}
