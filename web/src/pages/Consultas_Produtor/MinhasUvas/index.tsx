import React from 'react';
import { MenuLeft } from '../../../components/Consultas_Produtor/MenuLeft';
import ListarUvas from '../../../components/Consultas_Produtor/MinhasUvas/ListarUvas';
import PesquisarUvasProdutor from '../../../components/Consultas_Produtor/MinhasUvas/PesquisarUvasProdutor';

import styles from './MinhasUvas.module.css';

const UvasProdutor: React.FC = () => {
    return(
      <>
          <div className={styles.containerConsultaVinhos}>  
            <div className={styles.menuLeft}>        
                <MenuLeft/>
            </div>

            <div className={styles.content}>
                <PesquisarUvasProdutor/>
                <ListarUvas/>
            </div>
          </div> 
      </>
        
      );
  }

  export default UvasProdutor;