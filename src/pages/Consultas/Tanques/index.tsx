import React from 'react';
import CardTanque from '../../../components/Consultas/tanques/Cardtanque';
import Pesquisar from '../../../components/Consultas/tanques/Pesquisar';
import styles from './tanque.module.css';

const Tanques: React.FC = () => {
    return(
      <html>
          <div className={styles.container}>
            <Pesquisar/>
            <CardTanque />
          </div>
          
      </html>
        
      );
  }

  export default Tanques;