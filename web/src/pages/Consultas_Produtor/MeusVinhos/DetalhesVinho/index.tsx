import React from 'react';
import { MenuLeft } from '../../../../components/Consultas_Produtor/MenuLeft';


import styles from './DetalhesVinho.module.css';

const DetalhesVinho: React.FC = () => {
    return(
      <>
          <div className={styles.containerDetalhesVinho}>  
            <div className={styles.menuLeft}>        
                <MenuLeft/>
            </div>

            <div className={styles.content}>
              <DetalhesVinho/>
            </div>
            
          </div>
          
      </>
        
      );
  }

  export default DetalhesVinho;