import React from 'react';
import CardTanque from '../../../components/Consultas/tanques/Cardtanque';
import { PesquisarTanques } from '../../../components/Consultas/tanques/PesquisarTanques';

import styles from './tanque.module.css';

const Tanques: React.FC = () => {
    return(
      <html>
          <div className={styles.containerTanque}>
            <PesquisarTanques/>
            <CardTanque/>
          </div>
          
      </html>
        
      );
  }

  export default Tanques;