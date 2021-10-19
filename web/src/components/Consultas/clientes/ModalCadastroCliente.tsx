import React, { FormEvent, useState } from 'react';
import InputMask from "react-input-mask";

import styles from '../../../styles/components/Consultas/Clientes/Modal-cadastro-cliente.module.css'

import api from '../../../services/api'

export interface CreateClienteProps{
  nome: string,
  telefone: number,
  email: string,
  rua: string,
  numend: number
  bairro: string
  regiao: string,
}

export function ModalCadastroCliente({onClose = () => {}}){

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [rua, setRua] = useState('')
  const [numend, setNumeroend] = useState('')
  const [bairro, setBairro] = useState('')
  const [regiao, setRegiao] = useState('')

  function createNewClient(e: FormEvent){
    e.preventDefault();

    api.post('/addcliente', {
        nome,
        telefone,
        email,
        rua,
        numend,
        bairro,
        regiao
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
      
        <strong className={styles.strongCadastrar}>Cadastrar cliente</strong>
        
        <form className={styles.formModal} onSubmit={createNewClient}> 

          <label className={styles.labelModal} htmlFor="">Nome do cliente</label>
          <input type="text" id="nome" name="nome" onChange={(e) => {setNome(e.target.value)}}/>    

          <div className={styles.telEmail}>
            <label className={styles.labelModal} htmlFor="">Telefone</label>
            <label className={styles.labelModal} htmlFor="">Email</label>

            <input type="tel" id="telefone" name="telefone" onChange={(e) => {setTelefone(e.target.value)}}/>
            <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
          </div>   

          <div className={styles.ruaNumero}>
            <label className={styles.labelModal} htmlFor="">Rua</label>
            <label className={styles.labelModal} htmlFor="">Nº</label>

            <input type="text" id="rua" name="rua" onChange={(e) => {setRua(e.target.value)}}/>
            <input type="number" id="numend" name="numend" onChange={(e) => {setNumeroend(e.target.value)}}/>
          </div>            
          
          <label className={styles.labelModal} htmlFor="">Bairro</label>
          <input type="text" id="bairro" name="bairro" onChange={(e) => {setBairro(e.target.value)}}/>
          
          <label className={styles.labelModal} htmlFor="">Região</label>
          <select id="regiao" name="regiao" required onChange={(e) => {setRegiao(e.target.value)}}>
            <option value="" disabled selected>Selecione uma opção...</option>
            <option value="SP">SP</option>
            <option value="MG">MG</option>
            <option value="RJ">RJ</option>
            <option value="Interior">Interior</option>
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
