import React, { useState } from 'react';
import Image from 'next/image'

import styles from '../../../styles/components/Consultas/Uvas/CardUva.module.css'

import imgFermentation from '../../../../public/img/fermentation.png'
import imgUva from '../../../../public/img/uva.png'

const CardUva: React.FC = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>

                <main>
                    <section>   

                        <div className={styles.imgsCard}>
                            <Image width={800} height={400} src={imgUva} alt="Imagem tanque" objectFit="contain"/>
                        </div> 
                    
                    <div className={styles.valoresUvas}>
                        <div className={styles.labelCard}>
                            <label htmlFor="">Status:</label>
                            <label htmlFor="">Produtor:</label>
                            <label htmlFor="">Lote:</label>
                            <label htmlFor="">Safra:</label>
                            <label htmlFor="">Tanque:</label>    
                            <label htmlFor="">Uva:</label>                   
                        </div>

                        <div className={styles.valores}>
                            <div className={styles.imgStatus}>
                                <label htmlFor=""><Image width={900} height={300} src={imgFermentation} alt="Imagem check" objectFit="contain"/></label>  
                            </div>
                            <label id="label-produtor" htmlFor="">Produtor_01</label>
                            <label htmlFor="">L123</label>
                            <label htmlFor="">S123</label>
                            <label htmlFor="">Tanque_[]</label>
                            <label htmlFor="">Uva_Melot</label>
                        </div>

                    </div>
                    </section>
                         
                </main>
            
                
            </div>
        </div>
    )
}

export default CardUva;
