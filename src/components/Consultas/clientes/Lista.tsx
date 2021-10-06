
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

            <div className={styles.dadosClientes}>
                <p>Valor_nome2</p>
                <p>Valor_região2</p>
                <p>Valor_endereço2</p>
                <p>Valor_contato2</p>
                <button>Detalhar...</button>
            </div>

            <div className={styles.dadosClientes}>
                <p>Valor_nome3</p>
                <p>Valor_região3</p>
                <p>Valor_endereço3</p>
                <p>Valor_contato3</p>
                <button>Detalhar...</button>
            </div>

            <div className={styles.dadosClientes}>
                <p>Valor_nome4</p>
                <p>Valor_região4</p>
                <p>Valor_endereço4</p>
                <p>Valor_contato4</p>
                <button>Detalhar...</button>
            </div>

        </div>
    )
}

export default ListarClientes;
