import React from 'react';
import { CardClientesProps } from '../../../components/Consultas/clientes/Lista';
import { Tanques } from '../../../components/Consultas/tanques/Cardtanque';
import CardUva, { Uvas } from '../../../components/Consultas/uvas/CardUva';
import PesquisarUvas from '../../../components/Consultas/uvas/PesquisarUvas';

import styles from './uvas.module.css';

const UvasList = (props) => {

    return(
      <div>
          <div className={styles.containerUva}>
            <PesquisarUvas />
            

            <div className={styles.uvas}>
            {props.uvas.map((uvas: Uvas) => {
              return <CardUva key={uvas._id} uvas={uvas}/>
            })}     
          </div>

          </div>
      </div>
        
      );
  }

  export async function getServerSideProps() {

    // Fetch data from external API
    const response = await fetch('http://localhost:3333/listuvas')
    const data = await response.json()
  
    // Pass data to the page via props
    return { 
      props: { 
        uvas: data 
      } 
    }
  }

  export default UvasList;