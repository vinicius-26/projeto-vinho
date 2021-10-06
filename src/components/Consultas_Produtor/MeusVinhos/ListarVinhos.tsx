import styles from '../../../styles/components/Consultas_Produtor/MeusVinhos/Lista-Vinhos.module.css'


const ListarVinhos: React.FC = () =>{
    
    return(
        <div className={styles.containerListaVinhos}>
            
            <div className={styles.listaVinhos}>
                <p>Nome</p>
                <p>Safra</p>
                <p>Lote</p>
                <p>Início</p>
                <p>Status</p>
                <p>Finalizado</p>
            </div>

            <div className={styles.dadosVinhos}>
                <p>Valor_nome1</p>
                <p>Valor_safra1</p>
                <p>Valor_lote1</p>
                <p>06/10/2021</p>
                <p>Valor_status1</p>
                <p>Valor_finalizado1</p>
                <button>Detalhar...</button>
            </div>

            <div className={styles.dadosVinhos}>
                <p>Valor_nome2</p>
                <p>Valor_safra2</p>
                <p>Valor_lote2</p>
                <p>06/10/2021</p>
                <p>Valor_status2</p>
                <p>Valor_finalizado2</p>
                <button>Detalhar...</button>
            </div>

            <div className={styles.dadosVinhos}>
                <p>Valor_nome3</p>
                <p>Valor_safra3</p>
                <p>Valor_lote3</p>
                <p>06/10/2021</p>
                <p>Valor_status3</p>
                <p>Valor_finalizado3</p>
                <button>Detalhar...</button>
            </div>

            <div className={styles.dadosVinhos}>
                <p>Valor_nome4</p>
                <p>Valor_safra4</p>
                <p>Valor_lote4</p>
                <p>06/10/2021</p>
                <p>Valor_status4</p>
                <p>Valor_finalizado4</p>
                <button>Detalhar...</button>
            </div>

            

        </div>
    )
}

export default ListarVinhos;
