import React, {useEffect, useState } from 'react';
import CardTanque, { Tanques } from '../../../components/Consultas/tanques/Cardtanque';
import { PesquisarTanques } from '../../../components/Consultas/tanques/PesquisarTanques';
import api from '../../../services/api'

import styles from './tanque.module.css';

const TanquesList = (props) => {
    return(
      <html>

          <div className={styles.containerTanque}>
            <PesquisarTanques/>
            <div className={styles.tanques}>
              {props.tanques.map((tanques: Tanques) => {
                return <CardTanque key={tanques.id} tanques={tanques}/>
              })}     
            </div>
          </div>   
          
      </html>   
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

  export default TanquesList;