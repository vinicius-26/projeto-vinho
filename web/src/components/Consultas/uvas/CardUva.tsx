import React, { useState } from 'react';
import Image from 'next/image'

import styles from '../../../styles/components/Consultas/Uvas/CardUva.module.css'

import imgFermentation from '../../../../public/img/fermentation.png'
import imgUva from '../../../../public/img/uva.png'

export interface Uvas{
    _id: string,
    nome_uva: string,
    id_cliente: string,
    id_tanque: string,
    safra: string,
    lote: string
}

  export interface CardUvasProps {
    uvas: Uvas,
  }

const CardUva: React.FC<CardUvasProps> = ({uvas}) =>{
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
                            <div className={styles.imgStatus}><label htmlFor=""><Image width={1600} height={2050} src={imgFermentation} alt="Imagem check" objectFit="contain"/></label>  
                                
                            </div>
                            <label id="label-produtor" htmlFor="">{uvas.id_cliente}</label>
                            <label htmlFor="">{uvas.lote}</label>
                            <label htmlFor="">{uvas.safra}</label>
                            <label htmlFor="">Tanque {uvas.id_tanque}</label>
                            <label htmlFor="">{uvas.nome_uva}</label>
                        </div>

                    </div>
                    </section>
                         
                </main>
                
                
            </div>
        </div>
    )
}

export default CardUva;
