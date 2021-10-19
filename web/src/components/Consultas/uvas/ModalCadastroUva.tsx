import React, { useState } from 'react';

import styles from '../../../styles/components/Consultas/Uvas/Modal-cadastro-uva.module.css'
import { CardTanqueProps, Tanques } from '../tanques/Cardtanque';

function ModalCadastroUva({onClose = () => {}}){
    const [tanque, setTanque] = useState('')

    return(  
        <div className={styles.overlay}>
            <div className={styles.containerModal}>
            
                <strong className={styles.strongCadastrar}>Cadastrar uva</strong>
                

                <form className={styles.formModal} id="cadastro-cliente" action=""> 

                    <label className={styles.labelModal} htmlFor="">Nome da uva</label>
                    <input type="text"/>    

                    <label className={styles.labelModal} htmlFor="">Cliente</label>
                    <select required>
                        <option value="" disabled selected>Selecione uma opção...</option>
                        <option value="1">Cliente 1</option>
                        <option value="2">Cliente 2</option>
                        <option value="3">Cliente 3</option>
                        <option value="3">Cliente 4</option>
                        <option value="3">Cliente 5</option>
                    </select>
                    
                    <label className={styles.labelModal} htmlFor="">Tanque</label>
                    <select name="" id="" onChange={(e)=> {setTanque(e.target.value)}} >      
                    <option value="" disabled selected>Selecione uma opção...</option>
                        <option value="1">Tanque 1</option>
                        <option value="2">Tanque 2</option>
                        <option value="3">Tanque 3</option>
                        <option value="3">Tanque 4</option>
                        <option value="3">Tanque 5</option> 
                      </select>

                    <label className={styles.labelModal} htmlFor="">Safra</label>
                    <input type="text"/>

                    <label className={styles.labelModal} htmlFor="">Lote</label>
                    <input type="text"/>

                
                    <div className={styles.buttonFooter}>
                        <button type="submit"className={styles.buttonSalvar}>Cadastrar</button>
                        <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

  export default ModalCadastroUva;