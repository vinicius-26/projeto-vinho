
import styles from '../../../styles/components/Consultas/Clientes/Lista-clientes.module.css'


const ListarClientes: React.FC = () =>{
    
    return(
        <div className={styles.containerListaClientes}>
            
            <div className={styles.listaClientes}>
                <p>Nome</p>
                <p>Região</p>
                <p>Endereço</p>
                <p>Contato</p>
            </div>

            <div className={styles.dadosClientes}>
                <p>Valor_nome1</p>
                <p>Valor_região1</p>
                <p>Valor_endereço1</p>
                <p>Valor_contato1</p>
                <button>Detalhar...</button>
            </div>

        </div>
    )
}

export default ListarClientes;
