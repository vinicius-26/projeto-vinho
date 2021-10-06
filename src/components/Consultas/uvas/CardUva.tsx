import React, { useState } from 'react';
import Image from 'next/image'

import styles from '../../../styles/components/Consultas/Uvas/CardUva.module.css'

import imgUva from '../../../../public/img/uva.png'

const CardUva: React.FC = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>

                <main>
                    <section>   

                    <div className={styles.imgsCard}>
                        <Image width={300} height={300} src={imgUva} alt="Imagem tanque" objectFit="contain"/>
                    </div> 
                    
                    <div className={styles.labelCard}>
                        <label htmlFor="">Status:</label>
                        <label htmlFor="">Produtor:</label>
                        <label htmlFor="">Lote:</label>
                        <label htmlFor="">Safra:</label>
                        <label htmlFor="">Tanque:</label>    
                        <label htmlFor="">Uva:</label>                   
                    </div>
                    </section>
                         
                </main>
            
                
            </div>
        </div>
    )
}

export default CardUva;
