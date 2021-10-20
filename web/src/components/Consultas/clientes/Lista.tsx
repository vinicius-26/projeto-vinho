
import styles from '../../../styles/components/Consultas/Clientes/Lista-clientes.module.css'

export interface Clientes{
    id: number,
    nome: string,
    telefone: number,
    email: string,
    rua: string,
    numend: number
    bairro: string
    regiao: string,
}
  
export interface CardClientesProps {
    clientes: Clientes;
}

const ListarClientes: React.FC<CardClientesProps> = ({clientes}) =>{    
    return(
        <div className={styles.containerListaClientes}>

            <div className={styles.dadosClientes}>
                <p>{clientes.nome}</p>
                <p>{clientes.regiao}</p>
                <p>{clientes.rua}, {clientes.numend}, {clientes.bairro}</p>
                <p>{clientes.telefone}</p>
                <p>{clientes.email}</p>
                <button>Detalhar...</button>
            </div>

        </div>
    )
}

export default ListarClientes;
