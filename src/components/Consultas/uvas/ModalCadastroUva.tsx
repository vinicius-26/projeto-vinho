import React from 'react';

import styles from '../../../styles/components/Consultas/Uvas/Modal-cadastro-uva.module.css'

export function ModalCadastroUva({onClose = () => {}}){

    return(  
        <div className={styles.overlay}>
            <div className={styles.containerModal}>
            
                <strong className={styles.strongCadastrar}>Cadastrar uva</strong>
                

                <form className={styles.formModal} id="cadastro-cliente" action=""> 

                    <label className={styles.labelModal} htmlFor="">Nº Tanque</label>
                    <input type="text" value={1} disabled/>    
                    
                    <select required>
                        <option value="" disabled selected>Capacidade</option>
                        <option value="1">350L</option>
                        <option value="2">500L</option>
                        <option value="3">1000L</option>
                        <option value="3">2000L</option>
                        <option value="3">5000L</option>
                    </select>

                    <select required>
                        <option value="" disabled selected>Tipo</option>
                        <option value="1">Fermentação</option>
                        <option value="2">Estabilização</option>
                    </select>

                
                    <div className={styles.buttonFooter}>
                        <button type="submit"className={styles.buttonSalvar}>Salvar</button>
                        <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}