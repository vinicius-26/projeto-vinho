import React, { useState } from 'react';
import styles from '../../../styles/components/Consultas_Produtor/MeusVinhos/Pesquisar-Vinhos-Produtor.module.css'

const PesquisarVinhosProdutor: React.FC = () =>{
    return(
        
        <div className={styles.containerPesquisaVinhos}>
            
            <div className={styles.header}>
                <strong className={styles.strongVinhos}>Meus Vinhos</strong>
            </div>

                <div className={styles.pesquisarVinhos}>
                    <form action="">
                        <input type="text" placeholder="Tipo da uva" />
                        <input type="text" placeholder="Safra" />
                        <input type="number" placeholder="Tanque" />
                        <input type="text" placeholder="Usada" />
                        <button type="submit">Buscar Vinhos</button>
                    </form>
            </div>
        </div>
    )
}

export default PesquisarVinhosProdutor;