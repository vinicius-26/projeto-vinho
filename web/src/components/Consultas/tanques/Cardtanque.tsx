import React, { useState, useEffect } from 'react';
import { CreateUvaInputProps, ModalUva } from './ModalUva';
import Image from 'next/image'
import { Uvas } from '../uvas/CardUva';

import styles from '../../../styles/components/Consultas/Tanques/CardTanque.module.css'

import imgTank from '../../../../public/img/tank.png'
import imgPlus from '../../../../public/img/plus.png'
import imgCheck from '../../../../public/img/check.png'
import imgOff from '../../../../public/img/delete.png'
import imgWait from '../../../../public/img/hourglass.png'

import api from '../../../services/api'
import { stringify } from 'querystring';

  export interface Tanques{
    _id: string,
    numero: number,
    capacidade: number,
    tipo: string,
    date: string,
    newDate: string,
    uva_input: string,
    qtd_uva_input: number,
    clientes_tanque: string,
  }

  export interface CardTanqueProps {
    tanques: Tanques,
  }


const CardTanque: React.FC<CardTanqueProps> = ({tanques}) =>{

  const [isModalVisible, setIsModalVisible]= useState(false);

  const ocupacao = (tanques.qtd_uva_input * 100)  / (tanques.capacidade);

  return(

    <div className={styles.container}>
      <div className={styles.content}>

    {isModalVisible ? (<ModalUva tanques={tanques} onClose={() => setIsModalVisible(false)}/>) : null}

        <main>                 
            <section>   
              <div className={styles.imgsCard}>
                <p>Tanque {tanques.numero}</p>
                <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/> 

                <div className={styles.imgPlus}>
                  {tanques.uva_input ? null : <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>}
                </div>
              </div> 
          
              <div className={styles.valoresTanques}>    
                <div className={styles.labelCard}>
                  <label htmlFor="">Produtor:</label>
                  <label htmlFor="">Capacidade:</label>
                  <label htmlFor="">Ocupação:</label>
                  <label htmlFor="">Data entrada:</label>
                  <label htmlFor="">Tipo:</label>
                  <label htmlFor="">Uva atual:</label>
                  <label htmlFor="">Tempo: </label>
                  <label htmlFor="">Status:</label>
                </div>

                <div className={styles.valores}>
                  {tanques.uva_input ? <label id="label-produtor" htmlFor="">{tanques.clientes_tanque}</label> : <label htmlFor="">-Tanque vazio-</label>}
                  <label id="capacidade" htmlFor="">{tanques.capacidade}L</label>
                  <label id='ocupacao' htmlFor="">{ocupacao}% ({tanques.qtd_uva_input}L)</label>
                  {tanques.uva_input ? <label id='uva-atual' htmlFor="">{tanques.newDate}</label> : <label htmlFor="">-Tanque vazio-</label>}
                  <label htmlFor="" id='tipo'>{tanques.tipo}</label>
                  {tanques.uva_input ? <label id='uva-atual' htmlFor="">{tanques.uva_input}</label> : <label htmlFor="">-Tanque vazio-</label>}
                  <label htmlFor="" id="counter">00:00:00</label>
                  <div className={styles.imgStatus}>
                      { tanques.uva_input ? <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label> : 
                      <label htmlFor=""><Image width={300} height={300} src={imgOff} alt="Imagem off" objectFit="contain"/></label>}
                  </div>
                </div>
            </div>

            <div className={styles.buttonRetirar}>
              { tanques.uva_input ? <button className={styles.buttonRetirarUva}>Retirar uva</button> : null}
            </div>
        </section> 
        </main>       
      </div>
    </div>
  )
}

export default CardTanque;


