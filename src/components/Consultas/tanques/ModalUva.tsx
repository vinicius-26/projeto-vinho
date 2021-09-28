import React, { useContext } from 'react';

import { ModalUvaContext } from '../../../contexts/ModalContext';
import styles from '../../../styles/components/ModalUva.module.css'

export function ModalUva(){
    const { modalClose } = useContext(ModalUvaContext)

    return(
        
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header></header>

                <strong>Uva que está sendo colocada no tanque</strong>
                
                <button type="button" onClick={modalClose}>
                    <img src="/img/icons/close.svg" alt="Fechar modal" />
                </button>

                <form id="login" action="">     
                    
                    <label htmlFor="">Selecione a uva</label>
                    <input type="text" />

                    <label htmlFor="">Quantidade</label>
                    <input type="number" />

                    <label htmlFor="">Data Entrada</label>
                    <input type="date" />
                
                    <div className="buttonFooter">
                        <button className={styles.buttonSalvar}>Entrar</button>
                        <button className={styles.buttonCancelar} onClick={ modalClose }>Cancelar</button>
                    </div>
                </form>

            </div>

        </div>
    )
}
