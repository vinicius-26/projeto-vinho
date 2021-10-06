import styles from '../../../styles/components/Consultas_Produtor/MinhasUvas/Lista-Uvas.module.css'


const ListarUvas: React.FC = () =>{
    
    return(
        <div className={styles.containerListaUvas}>
            
            <div className={styles.listaUvas}>
                <p>Tipo</p>
                <p>Safra</p>
                <p>Plantio</p>
                <p>Colheita</p>
                <p>Tanque</p>
                <p>Usada</p>
            </div>

            <div className={styles.dadosUvas}>
                <p>Valor_tipo1</p>
                <p>Valor_safra1</p>
                <p>06/03/2021</p>
                <p>06/10/2021</p>
                <p>Valor_tanque1</p>
                <p>Valor_usada1</p>
            </div>

            <div className={styles.dadosUvas}>
                <p>Valor_tipo2</p>
                <p>Valor_safra2</p>
                <p>06/03/2021</p>
                <p>06/10/2021</p>
                <p>Valor_tanque2</p>
                <p>Valor_usada2</p>
            </div>

            <div className={styles.dadosUvas}>
                <p>Valor_tipo3</p>
                <p>Valor_safra3</p>
                <p>06/03/2021</p>
                <p>06/10/2021</p>
                <p>Valor_tanque3</p>
                <p>Valor_usada3</p>
            </div>

            <div className={styles.dadosUvas}>
                <p>Valor_tipo4</p>
                <p>Valor_safra4</p>
                <p>06/03/2021</p>
                <p>06/10/2021</p>
                <p>Valor_tanque4</p>
                <p>Valor_usada4</p>
            </div>

            

        </div>
    )
}

export default ListarUvas;
