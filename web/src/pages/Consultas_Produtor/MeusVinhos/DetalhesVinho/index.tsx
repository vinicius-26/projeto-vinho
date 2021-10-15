import React from 'react';
import { MenuLeft } from '../../../../components/Consultas_Produtor/MenuLeft';
import DetalhesVinhoComponent from '../../../../components/Consultas_Produtor/MeusVinhos/DetalhesVinho/DetalhesVinho';


import styles from './DetalhesVinho.module.css';

const DetalhesVinho: React.FC = () => {
    return(
      <>
          <div className={styles.containerDetalhesVinho}>  
            <div className={styles.menuLeft}>        
                <MenuLeft/>
            </div>

            <div className={styles.content}>
              <DetalhesVinhoComponent/>
            </div>
            
          </div>
          
      </>
        
      );
  }

  export default DetalhesVinho;