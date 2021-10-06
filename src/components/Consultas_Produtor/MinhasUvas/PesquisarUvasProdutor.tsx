import React, { useState } from 'react';
import styles from '../../../styles/components/Consultas_Produtor/MinhasUvas/Pesquisar-Uvas-Produtor.module.css'

const PesquisarUvasProdutor: React.FC = () =>{
    return(
        
        <div className={styles.containerPesquisaUvas}>
            
            <div className={styles.header}>
                <strong className={styles.strongUvas}>Minhas Uvas</strong>
                <img src="img/uva.png" alt="" />
            </div>

                <div className={styles.pesquisarUvas}>
                    <form action="">
                        <input type="text" placeholder="Tipo da uva" />
                        <input type="text" placeholder="Safra" />
                        <input type="number" placeholder="Tanque" />
                        <input type="text" placeholder="Usada" />
                        <button type="submit">Buscar Uvas</button>
                    </form>
            </div>
        </div>
    )
}

export default PesquisarUvasProdutor;