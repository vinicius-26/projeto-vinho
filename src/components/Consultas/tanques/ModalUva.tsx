import React from 'react';

import styles from '../../../styles/components/ModalUva.module.css'

export function ModalUva({onClose = () => {}}){

    return(  
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>
                    <strong>Uva que está sendo colocada no tanque</strong>
                </header>

                <form id="login" action="">     
                    
                    <select required>
                        <option value="" disabled selected>Selecione a uva...</option>
                        <option value="1">Uva 1</option>
                        <option value="2">Uva 2</option>
                        <option value="3">Uva 3</option>
                    </select>

                    <label htmlFor="">Quantidade</label>
                    <input type="number" />

                    <label htmlFor="">Data Entrada</label>
                    <input type="date" />
                
                    <div className={styles.buttonFooter}>
                        <button type="submit"className={styles.buttonSalvar}>Salvar</button>
                        <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
                    </div>
                </form>

            </div>

        </div>
    )
}
