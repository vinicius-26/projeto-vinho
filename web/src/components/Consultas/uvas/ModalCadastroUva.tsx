import React, { useState, SelectHTMLAttributes, useEffect, FormEvent } from 'react';
import api from '../../../services/api';

import styles from '../../../styles/components/Consultas/Uvas/Modal-cadastro-uva.module.css'
import { Clientes } from '../clientes/Lista';
import { CardTanqueProps, Tanques } from '../tanques/Cardtanque';

export interface CreateUvaProps{
  _id: string,
  nome_uva: string,
  id_cliente: string,
  id_tanque: string,
  safra: string,
  lote: string
}

  const ModalCadastroUva = ({onClose = () => {}}) => {
    const [tanques, setTanques] = useState<any | null>(null);
    const [clientes, setClientes] = useState<any | null>(null);

    useEffect(() => {
      api.get('http://localhost:3333/listtanques').then(({data}) => {
        setTanques(data);
      });
    }, [])

    useEffect(() => {
      api.get('http://localhost:3333/listclientes').then(({data}) => {
        setClientes(data);
      });
    }, [])

    const [nome_uva, setNome_uva] = useState('')
    const [id_cliente, setId_cliente] = useState('')
    const [id_tanque, setId_tanque] = useState('')
    const [safra, setSafra] = useState('')
    const [lote, setLote] = useState('')

    function createNewUva(e: FormEvent){
      e.preventDefault();
  
      api.post('/adduva', {
          nome_uva,
          id_cliente,
          id_tanque,
          safra,
          lote
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
          <strong className={styles.strongCadastrar}>Cadastrar uva</strong>

          <form className={styles.formModal} onSubmit={createNewUva}> 
            <label className={styles.labelModal} htmlFor="">Nome da uva</label>
            <input type="text" name="nome_uva" onChange={(e) => {setNome_uva(e.target.value)}}/>    

            <label className={styles.labelModal} htmlFor="">Cliente</label>
            <select name="id_cliente" id="" onChange={(e) => {setId_cliente(e.target.value)}}>
            {clientes?.map((clientes: Clientes) => (
              <option key={clientes._id}value={clientes.nome}>{clientes.nome}</option>
            ))}
            </select>
            
            <label className={styles.labelModal} htmlFor="">Tanque</label>
            <select name="id_tanque" id="" onChange={(e) => {setId_tanque(e.target.value)}}>
            {tanques?.map((tanques: Tanques) => (
              <option key={tanques._id} value={tanques.numero}>Tanque {tanques.numero}</option>
            ))}
            </select>

            

            <label className={styles.labelModal} htmlFor="">Safra</label>
            <input type="text" name="safra" onChange={(e) => {setSafra(e.target.value)}}/>

            <label className={styles.labelModal} htmlFor="">Lote</label>
            <input type="text" name="lote" onChange={(e) => {setLote(e.target.value)}}/>

        
            <div className={styles.buttonFooter}>
                <button type="submit"className={styles.buttonSalvar}>Cadastrar</button>
                <button className={styles.buttonCancelar} onClick={onClose}>Cancelar</button>
            </div>
        </form>
      </div>
    </div>
      );
  }

  export default ModalCadastroUva;