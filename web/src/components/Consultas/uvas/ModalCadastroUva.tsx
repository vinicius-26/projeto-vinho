import React, { useState, SelectHTMLAttributes, useEffect } from 'react';
import api from '../../../services/api';

import styles from '../../../styles/components/Consultas/Uvas/Modal-cadastro-uva.module.css'
import { Tanques } from '../tanques/Cardtanque';

  const ModalCadastroUva = (props, {onClose = () => {}}) => {
    return(
      
        <div className={styles.overlay}>
        <div className={styles.containerModal}>
          <strong className={styles.strongCadastrar}>Cadastrar uva</strong>

          <form className={styles.formModal} id="cadastro-cliente" action=""> 
            <label className={styles.labelModal} htmlFor="">Nome da uva</label>
            <input type="text"/>    

            <label className={styles.labelModal} htmlFor="">Cliente</label>
            <select >      
            <option disabled selected>Selecione uma opção...</option>
                <option value="1">Cliente 1</option>
                <option value="2">Cliente 2</option>
                <option value="3">Cliente 3</option>
                <option value="3">Cliente 4</option>
                <option value="3">Cliente 5</option> 
              </select>
            
            <label className={styles.labelModal} htmlFor="">Tanque</label>
            

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
      );
  }

  export async function getServerSideProps() {

    // Fetch data from external API
    const response = await fetch('http://localhost:3333/listtanques')
    const data = await response.json()
  
    // Pass data to the page via props
    return { 
      props: { 
        tanques: data 
      } 
    }
  }


  export default ModalCadastroUva;