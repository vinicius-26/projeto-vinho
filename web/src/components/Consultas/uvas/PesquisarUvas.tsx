import React, { useContext, useState } from 'react';
import styles from '../../../styles/components/Consultas/Uvas/Pesquisar-uvas.module.css'
import { ModalCadastroUva } from './ModalCadastroUva';

export function PesquisarUvas (){
    const [isModalVisible, setIsModalVisible]= useState(false);
    return(
        <div className={styles.containerPesquisaUvas}>
            <div className={styles.header}>
                <strong className={styles.strongUvas}>Uvas disponíveis</strong>

                <div className={styles.buttonCadastro}>
                    <button className={styles.buttonNovoCadastro} onClick={() => setIsModalVisible(true)}>+ Nova Uva</button>
                    {isModalVisible ? (
                    <ModalCadastroUva onClose={() => setIsModalVisible(false)}/>) : null}
                </div>

            </div>  

            <div className={styles.pesquisarUvas}>
                <form action="">
                    <input type="text" placeholder="Produtor" />
                    <input type="number" placeholder="Nº Tanque" />
                    <input type="text" placeholder="Lote" />

                    <button type="submit">Pesquisar</button>
                </form>
            </div>
        </div>
    )
}