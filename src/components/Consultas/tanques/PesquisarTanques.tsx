import React, { useContext, useState } from 'react';
import styles from '../../../styles/components/Consultas/Tanques/Pesquisar-tanques.module.css'
import { ModalCadastroTanque } from './ModalCadastroTanque';

export function PesquisarTanques (){
    const [isModalVisible, setIsModalVisible]= useState(false);
    return(
        <div className={styles.containerPesquisaTanques}>
            <div className={styles.header}>
                <strong className={styles.strongTanques}>Tanques disponíveis</strong>

                <div className={styles.buttonCadastro}>
                    <button className={styles.buttonNovoCadastro} onClick={() => setIsModalVisible(true)}>+ Novo Tanque</button>
                    {isModalVisible ? (
                    <ModalCadastroTanque onClose={() => setIsModalVisible(false)}/>) : null}
                </div>

            </div>  

            <div className={styles.pesquisarTanques}>
                <form action="">
                    <input type="text" placeholder="Produtor" />
                    <input type="number" placeholder="Tanque" />
                    <input type="text" placeholder="Lote" />
                    <input type="text" placeholder="Vinho" />
                    <input type="date"/>

                    <button type="submit">Pesquisar</button>
                </form>
            </div>
        </div>
    )
}

