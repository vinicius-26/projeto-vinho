import React, { FormEvent, useEffect, useState } from 'react';
import api from '../../../services/api';

import styles from '../../../styles/components/Consultas/Tanques/ModalUva.module.css'
import { Uvas } from '../uvas/CardUva';


export interface CreateUvaInputProps{
  uva_input: string,
  qtd_uva_input: string,

}


export function ModalUva({onClose = () => {}, tanques}){  
  const [uvas, setUvas] = useState<any | null>(null);
  
  const [uva_input, setUva_input] = useState('')
  const [qtd_uva_input, setQtd_uva_input] = useState('')

  useEffect(() => {
    api.get('http://localhost:3333/listuvas').then(({data}) => {
        setUvas(data);
    });
  }, [])

  function createNewUvaInput(e: FormEvent){
    e.preventDefault();

  api.post('/inserttanque', {
    uva_input,
    qtd_uva_input,
  }).then(() => {
      confirm('Inserção de dados realizada com sucesso!' )
      if (true){
          onClose();
          location.reload()
      } 

  }).catch((err) => {
      alert('Erro no cadastro' + err) 
  })
  
}

  return(  
    <div className={styles.overlay}>
      <div className={styles.containerModal}>
        <header>
          <strong>Uva que está entrando:</strong>
          <p >Tanque {tanques.numero}</p>
        </header>

        <form className={styles.formModal} onSubmit={createNewUvaInput}>     
            
            <select name="uva_input" id="uva_input" onChange={(e) => {setUva_input(e.target.value)}}>
            {uvas?.map((uvas: Uvas) => (
              <option key={uvas._id}value={uvas.nome_uva}>{uvas.nome_uva}</option>
            ))}
            </select>

          <label className={styles.labelModal} htmlFor="">Quantidade (L)</label>
          <input type="number" name="qtd_uva_input" id="qtd_uva_input" onChange={(e) => {setQtd_uva_input(e.target.value)}}/>
      
          <div className={styles.buttonFooter}>
            <button type="submit"className={styles.buttonSalvar}>Salvar</button>
            <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

