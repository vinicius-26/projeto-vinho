import React from 'react';
import { MenuLeft } from '../../../components/Consultas_Produtor/MenuLeft';
import ListarVinhos from '../../../components/Consultas_Produtor/MeusVinhos/ListarVinhos';
import PesquisarVinhosProdutor from '../../../components/Consultas_Produtor/MeusVinhos/PesquisarVinhosProdutor';

import styles from './MeusVinhos.module.css';

const VinhosProdutor: React.FC = () => {
    return(
      <>
          <div className={styles.containerConsultaVinhos}>  
            <div className={styles.menuLeft}>        
                <MenuLeft/>
            </div>

            <div className={styles.content}>
              <PesquisarVinhosProdutor/>
              <ListarVinhos/>
            </div>
            
          </div>
          
      </>
        
      );
  }

  export default VinhosProdutor;