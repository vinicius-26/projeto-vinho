import React, { useState } from 'react';

import styles from '../../../styles/components/Consultas/Tanques/ModalUva.module.css'

export function ModalUva({onClose = () => {}, tanques}){  
    
    return(  
        <div className={styles.overlay}>
            <div className={styles.containerModal}>
                <header>
                    <strong>Uva que está entrando no tanque {tanques.numero}</strong>
                </header>

                <form className={styles.formModal} id="login" action="">     
                    
                    <select required>
                        <option value="" disabled selected>Selecione a uva...</option>
                        <option value="1">Uva 1</option>
                        <option value="2">Uva 2</option>
                        <option value="3">Uva 3</option>
                    </select>

                    <label className={styles.labelModal} htmlFor="">Quantidade (L)</label>
                    <input type="number" />

                    <label className={styles.labelModal} htmlFor="">Data Entrada</label>
                    <input type="date"/>
                
                    <div className={styles.buttonFooter}>
                        <button type="submit"className={styles.buttonSalvar}>Salvar</button>
                        <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
                    </div>
                </form>

            </div>

        </div>
    )
}
