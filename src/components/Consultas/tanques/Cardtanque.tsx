import React, { useState } from 'react';
import { ModalUva } from './ModalUva';

import styles from '../../../styles/components/Tanques.module.css'

function CardTanque(){
    const [isModalVisible, setIsModalVisible]= useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <strong>Tanques disponíveis</strong>
                <form action="">
                    <input type="text" placeholder="Produtor" />
                    <input type="text" placeholder="Tanque" />
                    <input type="text" placeholder="Lote" />

                    <button type="submit">Pesquisar</button>
                </form>
            </div>

            <div className={styles.content}>

                <main>
                    <section>
                                                <img src="img/tank.png" alt="" />
                        

                        <div className="">
                            <button className={styles.buttonOpenModal} onClick={() => setIsModalVisible(true)}> <img src="img/plus.png" alt="" /> </button>
                            {isModalVisible ? (
                            <ModalUva onClose={() => setIsModalVisible(false)}/>) : null}
                        </div>
                    </section>
                         
                </main>
            
                
            </div>
        </div>
    )
}

export default CardTanque;
