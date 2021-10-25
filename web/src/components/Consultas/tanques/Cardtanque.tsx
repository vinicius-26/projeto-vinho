import React, { useState, useEffect } from 'react';
import { ModalUva } from './ModalUva';
import Image from 'next/image'
import { Uvas } from '../uvas/CardUva';

import styles from '../../../styles/components/Consultas/Tanques/CardTanque.module.css'

import imgTank from '../../../../public/img/tank.png'
import imgPlus from '../../../../public/img/plus.png'
import imgCheck from '../../../../public/img/check.png'
import imgOff from '../../../../public/img/delete.png'

import api from '../../../services/api'

  export interface Tanques{
    _id: string,
    numero: number,
    capacidade: number,
    tipo: string,
    date: string,
    newDate: string,
  }

  export interface CardTanqueProps {
    tanques: Tanques,
  }


const CardTanque: React.FC<CardTanqueProps> = ({tanques}) =>{

  const [isModalVisible, setIsModalVisible]= useState(false);
  const [isStatusOn, setIsStatusOn] = useState(false)
  const [uvas, setUvas] = useState<any | null>(null);
  const [isOcupado, setIsOcupado] = useState();

  useEffect(() => {
      api.get('http://localhost:3333/listuvas').then(({data}) => {
        setUvas(data);
        setIsOcupado
    });
  }, [])

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
                  <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
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
                  <label id="label-produtor" htmlFor="">Produtor_01</label>
                  <label id="capacidade" htmlFor="">{tanques.capacidade}L</label>

                  {}

                  <label htmlFor="">{tanques.newDate}</label>
                  <label htmlFor="">{tanques.tipo}</label>
                  <label htmlFor="">{}</label>
                  <label htmlFor="" id="counter">00:00:00</label>
                  <div className={styles.imgStatus}>
                      { isStatusOn ? <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label> : 
                      <label htmlFor=""><Image width={300} height={300} src={imgOff} alt="Imagem off" objectFit="contain"/></label>}
                  </div>
                </div>
            </div>

            <div className={styles.buttonRetirar}>
              <button className={styles.buttonRetirarUva}>Retirar uva</button>
            </div>
        </section> 
        </main>       
      </div>
    </div>
  )
}

export default CardTanque;


