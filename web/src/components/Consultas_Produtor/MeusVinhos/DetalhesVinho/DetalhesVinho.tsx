import Link from 'next/link';
import Image from 'next/image'
import React from 'react';

import imgCheck from '../../../../public/img/check.png'

import styles from '../../../styles/components/Consultas_Produtor/MeusVinhos/DetalhesVinho/Detalhes-Vinhos.module.css'

const DetalhesVinho: React.FC = () =>{
    
    return(
        <div className={styles.containerDetalhesVinhos}>
            <strong>Detalhes</strong>

            <div className={styles.labelCard}>
                <label htmlFor="">Nome:</label>
                <label htmlFor="">Lote:</label>
                <label htmlFor="">Safra:</label>
                <label htmlFor="">Início processo:</label>
                <label htmlFor="">Finalizado:</label>
            </div>

            <div className={styles.valores}>
                <label id="label-produtor" htmlFor="">Vinho_01</label>
                <label htmlFor="">L123_1</label>
                <label htmlFor="">S123_1</label>
                <label htmlFor="">07/10/2021</label>
                <div className={styles.imgStatus}>
                    <label htmlFor=""><Image width={300} height={300} src={imgCheck} alt="Imagem check" objectFit="contain"/></label>  
                </div>
            </div>
        </div>
    )
}

export default DetalhesVinho;
