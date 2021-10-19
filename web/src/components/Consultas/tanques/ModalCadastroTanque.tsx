import { ok } from 'assert';
import  React, { FormEvent, useState }  from 'react';
import { useHistory} from 'react-router-dom'
import { isNumberObject } from 'util/types';
import api from '../../../services/api'

import styles from '../../../styles/components/Consultas/Tanques/Modal-cadastro-tanque.module.css'

export interface CreateTanqueProps{
  id: number,
  numero: number,
  capacidade: number,
  tipo: string,
}

export function ModalCadastroTanque({onClose = () => {}}){
  const history = useHistory();

  const [numero, setNumero] = useState('')
  const [capacidade, setCapacidade] = useState('')
  const [tipo, setTipo] = useState('')

  function createNewTanque(e: FormEvent){
    e.preventDefault();

    api.post('/addtanque', {
        numero,
        capacidade,
        tipo
    }).then(() => {
        confirm('Cadastro realizado com sucesso!' )
        if (true){
            onClose();
            location.reload()
        } 

    }).catch(() => {
        alert('Erro no cadastro')
    })
  }

  return(  
    <div className={styles.overlay}>
      <div className={styles.containerModal}>

        <strong className={styles.strongCadastrar}>Cadastrar tanque</strong>

        <form className={styles.formModal} onSubmit={createNewTanque}> 

          <label className={styles.labelModal} htmlFor="">Nº Tanque</label>
          <input type="number" id="numero" name="numero" onChange={(e) => {setNumero(e.target.value)}}/>   
          
          <select defaultValue="" required name="capacidade" id="capacidade" onChange={(e) => {setCapacidade(e.target.value)}}>
            <option value="" disabled selected>Capacidade</option>
            <option value="350">350L</option>
            <option value="500">500L</option>
            <option value="1000">1000L</option>
            <option value="2000">2000L</option>
            <option value="500">5000L</option>
          </select>

          <select required id="tipo" name="tipo" onChange={(e) => {setTipo(e.target.value)}}>
            <option value="" disabled selected>Tipo</option>
            <option value="Fermentação">Fermentação</option>
            <option value="Estabilização">Estabilização</option>
          </select>   
          
          <div className={styles.buttonFooter}>
              <button type="submit"className={styles.buttonSalvar}>Cadastrar</button>
              <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
