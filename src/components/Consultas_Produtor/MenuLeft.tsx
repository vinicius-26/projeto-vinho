import React, { useContext, useState } from 'react';
import styles from '../../styles/components/Consultas_Produtor/MenuLeft.module.css'
import Image from 'next/image'
import Link from 'next/link';

import imgVinho from '../../../public/img/wine-bottle.png'

export function MenuLeft (){
    return(
        <div className={styles.containerMenu}>
            <div className={styles.imgVinho}>
                <Image width={1000} height={1000} src={imgVinho} alt="Imagem tanque" objectFit="contain"/>
            </div>
            <Link href="/Consultas_Produtor/MinhasUvas"><a>MINHAS UVAS</a></Link>
            <Link href="/Consultas_Produtor/MeusVinhos"><a>MEUS VINHOS</a></Link>
            <a href="">EDITAR CADASTRO</a>
        </div>
    )
}