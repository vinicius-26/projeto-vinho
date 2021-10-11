import React from 'react';

import styles from '../../../styles/components/Consultas/Clientes/Modal-cadastro-cliente.module.css'

export function ModalCadastroCliente({onClose = () => {}}){

    return(  
        <div className={styles.overlay}>
            <div className={styles.containerModal}>
            
                <strong className={styles.strongCadastrar}>Cadastrar cliente</strong>
                

                <form className={styles.formModal} id="cadastro-cliente" action=""> 

                    <label className={styles.labelModal} htmlFor="">Nome do cliente</label>
                    <input type="text" />    
                    
                    <select required>
                        <option value="" disabled selected>Selecione a Região</option>
                        <option value="1">SP</option>
                        <option value="2">MG</option>
                        <option value="3">RJ</option>
                        <option value="3">Interior</option>
                    </select>

                    <label className={styles.labelModal} htmlFor="">Rua</label>
                    <input type="text" />

                    <label className={styles.labelModal} htmlFor="">Bairro</label>
                    <input type="text" />

                
                    <div className={styles.buttonFooter}>
                        <button type="submit"className={styles.buttonSalvar}>Salvar</button>
                        <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
