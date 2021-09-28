import { LoginUsuario } from '../components/Login/Login'
import { CadastroUsuario } from '../components/Login/Cadastro'
import { LandingHome } from '../components/LandingPage/LandingHome'
import { NavBar } from '../components/PageHeader/NavBar'
import { ModalUva } from '../components/Consultas/tanques/ModalUva'

export default function Home() {
  return (
   <div className="container">
     
     <ModalUva></ModalUva>
     
   </div>
  )
}
