import React, { FormEvent, useEffect, useState } from 'react';
import api from '../../../services/api';

import styles from '../../../styles/components/Consultas/Tanques/ModalUva.module.css'
import { Clientes } from '../clientes/Lista';
import { Uvas } from '../uvas/CardUva';


export interface CreateUvaInputProps{
  uva_input: string,
  qtd_uva_input: number,
  clientes_tanque: string
}

export function ModalUva({onClose = () => {}, tanques}){  
  const [uvas, setUvas] = useState<any | null>(null);
  const [clientes, setClientes] = useState<any | null>(null);
  
  const [_id, setId] = useState('')
  const [uva_input, setUva_input] = useState('')
  const [qtd_uva_input, setQtd_uva_input] = useState('')
  const [clientes_tanque, setClientesTanque] = useState('')

  useEffect(() => {
    api.get('http://localhost:3333/listuvas').then(({data}) => {
        setUvas(data);
    });
  }, [])

  useEffect(() => {
    api.get('http://localhost:3333/listclientes').then(({data}) => {
        setClientes(data);
    });
  }, [])

  useEffect(() => {
    setId(tanques._id)
  }, [])


  function createNewUvaInput(e: FormEvent){
    e.preventDefault();

  api.put('/insertuva', {
    _id,
    uva_input,
    qtd_uva_input,
    clientes_tanque,
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
          <label className={styles.labelModal} htmlFor="">Uva</label>

          <select name="uva_input" id="uva_input" onChange={(e) => {setUva_input(e.target.value)}}>
            <option disabled selected value="">Selecione uma uva...</option>
          {uvas?.map((uvas: Uvas) => (
            <option key={uvas._id}value={uvas.nome_uva}>{uvas.nome_uva}</option>
          ))}
          </select>
          
          <label className={styles.labelModal} htmlFor="">Cliente</label>
          <select name="cliente" id="cliente" onChange={(e) => {setClientesTanque(e.target.value)}}>
            <option disabled selected value="">Selecione um cliente...</option>
          {clientes?.map((clientes: Clientes) => (
            <option key={clientes._id}value={clientes.nome}>{clientes.nome}</option>
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

