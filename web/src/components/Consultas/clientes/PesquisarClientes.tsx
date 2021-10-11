import React, { useState } from 'react';
import styles from '../../../styles/components/Consultas/Clientes/Pesquisar-clientes.module.css'
import { ModalCadastroCliente } from './ModalCadastroCliente';

const PesquisarClientes: React.FC = () =>{
    const [isModalVisible, setIsModalVisible]= useState(false);
    return(
        
        <div className={styles.containerPesquisaClientes}>
            
            <div className={styles.header}>
                <strong className={styles.strongClientes}>Clientes</strong>
                <img src="img/businessman.png" alt="" />

                <div className={styles.buttonCadastro}>
                    <button className={styles.buttonNovoCadastro} onClick={() => setIsModalVisible(true)}>+ Novo Cadastro</button>
                    {isModalVisible ? (
                    <ModalCadastroCliente onClose={() => setIsModalVisible(false)}/>) : null}
                </div>
            </div>

                <div className={styles.pesquisarClientes}>
                    <form action="">
                        <input type="text" placeholder="Nome do cliente" />
                        <input type="text" placeholder="Regiao" />
                        <input type="text" placeholder="Endereço" />

                        <button type="submit">Buscar clientes</button>
                    </form>
            </div>
        </div>
    )
}

export default PesquisarClientes;