import React, { useState } from 'react';
import styles from '../../../styles/components/Consultas/Clientes/Pesquisar-clientes.module.css'
import { ModalCadastroCliente } from './ModalCadastroCliente';
import Image from 'next/image'

import imgCliente from '../../../../public/img/businessman.png'

const PesquisarClientes: React.FC = () =>{
    const [isModalVisible, setIsModalVisible]= useState(false);
    return(
        
        <div className={styles.containerPesquisaClientes}>
            
            <div className={styles.header}>
                <Image width={1000} height={1000} src={imgCliente} alt="Imagem cliente" objectFit="contain"/>
                <strong className={styles.strongClientes}>Clientes</strong>
                
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

            <div className={styles.listaClientes}>
                <p>Nome</p>
                <p>Região</p>
                <p>Endereço</p>
                <p>Telefone</p>
                <p>Email</p>
            </div>
        </div>
    )
}

export default PesquisarClientes;