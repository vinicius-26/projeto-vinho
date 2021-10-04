
import styles from './LandingHome.module.css';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

import imgTank from '../../public/img/tank.png'

const LandingHome: React.FC = () => {
    return(
    <div className={styles.container}>
        <section>
            <span>Sistema de Controle</span>
            <p>Consultar:</p>

            <div className={styles.content}>

                <div className={styles.uva}>
                    <img src="img/uva.png" alt="" />
                    <Link href="/Consultas/Tanques"><a><button>UVA</button></a></Link>
                </div>

                <div className={styles.tanque}>
                <Image width={1000} height={1000} src={imgTank} alt="Imagem tanque" objectFit="contain"/>
                    <button><Link href="/Consultas/Tanques"><a>TANQUES</a></Link></button>
                </div>

                <div className={styles.cliente}>
                    <img src="img/businessman.png" alt="" />
                    <button><Link href="/Consultas/Clientes"><a>CLIENTES</a></Link></button>
                </div>
            
            </div>

        </section>
    </div>

    )
}

export default LandingHome;

