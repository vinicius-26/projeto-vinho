import { LoginUsuario } from '../components/Login/Login'
import { CadastroUsuario } from '../components/Login/Cadastro'
import CardTanque from '../components/Consultas/tanques/Cardtanque'
import Tanques from './Consultas/Tanques'
import { NavBar } from '../components/PageHeader/NavBar'
import LandingHome from './LandingPage'
import ListarClientes from '../components/Consultas/clientes/Lista'

export default function Home() {
  return (
   <div className="container">
     <>
        <ListarClientes/>
     </>
   </div>
  )
}
