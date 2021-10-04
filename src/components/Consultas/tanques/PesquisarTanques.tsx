import React, { useContext } from 'react';
import styles from '../../../styles/components/Pesquisar-tanques.module.css'

export function PesquisarTanques (){
    return(
        <div className={styles.header}>
            <strong>Tanques disponíveis</strong>

            <form action="">
                <input type="text" placeholder="Produtor" />
                <input type="text" placeholder="Tanque" />
                <input type="text" placeholder="Lote" />

                <button type="submit">Pesquisar</button>
            </form>
        </div>
    )
}

