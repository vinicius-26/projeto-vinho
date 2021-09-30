import { useState } from 'react';
import styles from '../../../styles/components/Lista-clientes.module.css'
import { ModalCadastroCliente } from './ModalCadastroCliente';



const ListarClientes: React.FC = () => {
    const [isModalVisible, setIsModalVisible]= useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <strong>Clientes</strong>
                <img src="img/businessman.png" alt="" />

                <button onClick={() => setIsModalVisible(true)}>+ Novo Cadastro</button>
                {isModalVisible ? (
                <ModalCadastroCliente onClose={() => setIsModalVisible(false)}/>) : null}

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
                <p>Contato</p>
            </div>

            <div className={styles.dadosClientes}>
                <p>Valor_nome</p>
                <p>Valor_região</p>
                <p>Valor_endereço</p>
                <p>Valor_contato</p>
                <button>Detalhar...</button>

            </div>

        </div>
    )
}

export default ListarClientes;
