import React from 'react';
import { CardClientesProps } from '../../../components/Consultas/clientes/Lista';
import { Tanques } from '../../../components/Consultas/tanques/Cardtanque';
import CardUva from '../../../components/Consultas/uvas/CardUva';
import PesquisarUvas from '../../../components/Consultas/uvas/PesquisarUvas';

import styles from './uvas.module.css';

const Uvas = (props) => {

    return(
      <div>
          <div className={styles.containerUva}>
            <PesquisarUvas />
            <CardUva/>

            <select name="" id="">
              {props.tanques.map((tanques: Tanques) => {
                  return <option key={tanques.id}>{tanques.numero}</option>
              })}    
            </select>

          </div>
      </div>
        
      );
  }

  export async function getServerSideProps() {

    // Fetch data from external API
    const response = await fetch('http://localhost:3333/listtanques')
    const data = await response.json()
  
    // Pass data to the page via props
    return { 
      props: { 
        tanques: data 
      } 
    }
  }

  export default Uvas;