import React, {useEffect, useState } from 'react';
import CardTanque, { Tanques } from '../../../components/Consultas/tanques/Cardtanque';
import { PesquisarTanques } from '../../../components/Consultas/tanques/PesquisarTanques';
import api from '../../../services/api'

import styles from './tanque.module.css';

const TanquesList = (props) => {
    return(
      <div>
          <div className={styles.containerTanque}>
            <PesquisarTanques/>

            <select name="" id="">
              {props.tanques.map((tanques: Tanques) => {
                  return <option key={tanques.id}>{tanques.numero}</option>
              })}    
            </select>

            <div className={styles.tanques}>
            
              {props.tanques.map((tanques: Tanques) => {
                return <CardTanque key={tanques.id} tanques={tanques}/>
              })}     
            </div>
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

  export default TanquesList;