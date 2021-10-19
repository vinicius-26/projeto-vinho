import React from 'react';
import ListarClientes, { Clientes }  from '../../../components/Consultas/clientes/Lista';
import PesquisarClientes from '../../../components/Consultas/clientes/PesquisarClientes';


import styles from './cliente.module.css';

const ClientesList = (props) => {
    return(
      <html>
          <div className={styles.containerConsultaClientes}>
            <PesquisarClientes/>
            <div className={styles.listaClientes}>
              {props.clientes.map((clientes: Clientes) => {
                return <ListarClientes key={clientes.id} clientes={clientes}/>
              })}
            </div>     
          </div>
          
      </html>
        
      );
  }

  export async function getServerSideProps() {

    // Fetch data from external API
    const response = await fetch('http://localhost:3333/listclientes')
    const data = await response.json()
  
    // Pass data to the page via props
    return { 
      props: { 
        clientes: data 
      } 
    }
  }


  export default ClientesList;