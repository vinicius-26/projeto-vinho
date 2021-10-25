
import styles from './LandingHome.module.css';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

import imgUva from '../../public/img/uva.png'
import imgTank from '../../public/img/tank.png'
import imgCliente from '../../public/img/businessman.png'
import imgVinho from '../../public/img/mywine.png'



//index do projeto
const LandingHome: React.FC = () => {
  
  return(
  <div className={styles.container}>
    <span>Sistema de Controle e Consulta de Dados</span>
    <div className={styles.controle}>
      <section>
          
        <p>Consultar (Fermentador):</p>

        <div className={styles.content}>
          <div className={styles.uva}>
              <Image width={1000} height={1000} src={imgUva} alt="Imagem tanque" objectFit="contain"/>
              <Link href="/Consultas/Uvas"><button>UVAS</button></Link> 
          </div>

          <div className={styles.tanque}>
              <Image width={1000} height={1000} src={imgTank} alt="Imagem tanque" objectFit="contain"/>
              <Link href="/Consultas/Tanques"><button>TANQUES</button></Link>
          </div>

          <div className={styles.cliente}>
              <Image width={1000} height={1000} src={imgCliente} alt="Imagem tanque" objectFit="contain"/>          
              <Link href="/Consultas/Clientes"><button>CLIENTES</button></Link>
          </div>       
        </div>
      </section>

      <section>
        <p>Consultar (Dono da Uva):</p>
        <div className={styles.content}>
          <div className={styles.uva}>
              <img src="img/uva.png" alt="" />
              <Link href="/Consultas_Produtor/MinhasUvas"><button>MINHAS UVAS</button></Link>
          </div>

          <div className={styles.tanque}>
              <Image width={1000} height={1000} src={imgVinho} alt="Imagem tanque" objectFit="contain"/>
              <Link href="/Consultas_Produtor/MeusVinhos"><button>MEUS VINHOS</button></Link>
          </div>
        </div>
      </section>
    </div>
  </div>
  

  )
}

export default LandingHome;

