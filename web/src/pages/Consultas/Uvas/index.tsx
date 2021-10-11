import React from 'react';
import CardUva from '../../../components/Consultas/uvas/CardUva';
import { PesquisarUvas } from '../../../components/Consultas/uvas/PesquisarUvas';


import styles from './uvas.module.css';

const Uvas: React.FC = () => {
    return(
      <html>
          <div className={styles.containerUva}>
            <PesquisarUvas/>
            <CardUva/>

          </div>
      </html>
        
      );
  }

  export default Uvas;