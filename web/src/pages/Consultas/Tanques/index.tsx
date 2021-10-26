import React, {useEffect, useState } from 'react';
import CardTanque, { Tanques } from '../../../components/Consultas/tanques/Cardtanque';
import { PesquisarTanques } from '../../../components/Consultas/tanques/PesquisarTanques';
import api from '../../../services/api'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './tanque.module.css';

const TanquesList = (props) => {

  //Função que faz a tela quando for renderizada descer pro container de tanques 
  useEffect(() => {
    const id = 'tanques';
    const yOffset = 10; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  },[])

    return(
      <div>
        <div className={styles.containerTanque}>
          <PesquisarTanques/>

          <div id="tanques" className={styles.tanques}>
            {props.tanques.map((tanques: Tanques) => {
              return <CardTanque key={tanques._id} tanques={tanques}/>
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
    const tanques = data.map(tanques => {
      return {
        _id: tanques._id,
        numero: tanques.numero,
        capacidade: tanques.capacidade,
        tipo: tanques.tipo,
        newDate: format(parseISO(tanques.date), 'd' + '/' + 'M' + '/' + 'y', {locale: ptBR }),
        uva_input: (tanques.uva_input ? tanques.uva_input : null),
        qtd_uva_input: (tanques.qtd_uva_input ? tanques.qtd_uva_input : null),
        clientes_tanque: (tanques.clientes_tanque ? tanques.clientes_tanque : null),
      }
    })
    // Pass data to the page via props
    return { 
      props: { 
        tanques 
      } 
    }
  }

  export default TanquesList;