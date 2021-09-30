import React from 'react';
import ListarClientes from '../../../components/Consultas/clientes/Lista';
import Pesquisar from '../../../components/Consultas/clientes/Pesquisar';

import styles from './tanque.module.css';

const Clientes: React.FC = () => {
    return(
      <html>
          <div className={styles.container}>
            <Pesquisar/>
            <ListarClientes/>
          </div>
          
      </html>
        
      );
  }

  export default Clientes;