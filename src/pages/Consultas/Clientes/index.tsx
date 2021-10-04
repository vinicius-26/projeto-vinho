import React from 'react';
import ListarClientes from '../../../components/Consultas/clientes/Lista';
import PesquisarClientes from '../../../components/Consultas/clientes/PesquisarClientes';


import styles from './cliente.module.css';

const Clientes: React.FC = () => {
    return(
      <html>
          <div className={styles.containerClientes}>
            <PesquisarClientes/>
            <ListarClientes/>
          </div>
          
      </html>
        
      );
  }

  export default Clientes;