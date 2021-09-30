import React, { useState } from 'react';
import { ModalUva } from './ModalUva';

import styles from '../../../styles/components/Tanques.module.css'

function CardTanque(){
    const [isModalVisible, setIsModalVisible]= useState(false);

    return(
        <div className={styles.container}>

            <div className={styles.content}>

                <main>
                    <section>   
                                       
                    <img src="img/tank.png" alt="" />
                        <div className="">
                            <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <img src="img/plus.png" alt="" /> </button>
                            {isModalVisible ? (
                            <ModalUva onClose={() => setIsModalVisible(false)}/>) : null}
                        </div>
                        <label htmlFor="">Produtor:</label>
                        <label htmlFor="">Ocupação:</label>
                        <label htmlFor="">Data entrada:</label>
                        <label htmlFor="">Vinho atual:</label>
                        <label htmlFor="">Tempo: </label>
                        <label htmlFor="">Status:</label>


                    </section>
                         
                </main>
            
                
            </div>
        </div>
    )
}

export default CardTanque;
