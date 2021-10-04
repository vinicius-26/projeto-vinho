import React, { useState } from 'react';
import { ModalUva } from './ModalUva';
import Image from 'next/image'

import styles from '../../../styles/components/Tanques.module.css'

import imgTank from '../../../../public/img/tank.png'
import imgPlus from '../../../../public/img/plus.png'

const CardTanque: React.FC = () =>{
    const [isModalVisible, setIsModalVisible]= useState(false);

    return(
        <div className={styles.container}>

            <div className={styles.content}>

                <main>
                    <section>   

                    <div className={styles.imgsCard}>
                        <Image width={300} height={300} src={imgTank} alt="Imagem tanque" objectFit="contain"/>

                        <div className={styles.imgPlus}>
                            <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <Image width={300} height={300} src={imgPlus} alt="Imagem tanque" objectFit="contain"/> </button>
                            {isModalVisible ? (
                            <ModalUva onClose={() => setIsModalVisible(false)}/>) : null}
                        </div>
                    </div> 
                    
                    <div className={styles.labelCard}>
                        <label htmlFor="">Produtor:</label>
                        <label htmlFor="">Ocupação:</label>
                        <label htmlFor="">Data entrada:</label>
                        <label htmlFor="">Vinho atual:</label>
                        <label htmlFor="">Tempo: </label>
                        <label htmlFor="">Status:</label>
                    </div>

                    </section>
                         
                </main>
            
                
            </div>
        </div>
    )
}

export default CardTanque;
