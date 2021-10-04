import React from 'react';
import styles from '../../../styles/components/Pesquisar-clientes.module.css'

const PesquisarClientes: React.FC = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <strong>Tanques disponíveis</strong>
            </div>

            <div className={styles.pesquisarClientes}>
                <form action="">
                    <input type="text" placeholder="Nome-cliente" />
                    <input type="text" placeholder="Regiao-cliente" />
                    <input type="text" placeholder="Endereco-cliente" />

                    <button type="submit">Buscar clientes</button>
                </form>
            </div>

        </div>
    )
}

export default PesquisarClientes;