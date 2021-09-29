import styles from '../../styles/components/LandingHome.module.css'
import {Link} from 'react-router-dom';

export function LandingHome(){
    return(
    <div className={styles.container}>
        <section>
            <span>Sistema de Controle</span>
            <p>Consultar:</p>

            <div className={styles.content}>

                <div className={styles.uva}>
                    <img src="img/uva.png" alt="" />
                    <button>UVA</button>
                </div>

                <div className={styles.tanque}>
                    <img src="img/tank.png" alt="" />
                        <button>TANQUE</button>
                </div>

                <div className={styles.cliente}>
                    <img src="img/businessman.png" alt="" />
                    <button>CLIENTE</button>
                </div>
            
            </div>

        </section>
    </div>
    )
}