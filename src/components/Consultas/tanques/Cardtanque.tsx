import React, { useContext } from 'react';

import { ModalUvaContext } from '../../../contexts/ModalContext';
import styles from '../../../styles/components/ModalUva.module.css'

export function CardTanque(){
    const { modalOpen } = useContext(ModalUvaContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
            
            </div>
        </div>
    )
}
