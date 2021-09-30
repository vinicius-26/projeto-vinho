import styles from '../../styles/components/NavBar.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';


export function NavBar(){
    return(
    <div className={styles.navbar}>

        <a>HOME</a>

        <a href="">CADASTRO DE UVAS</a>

        <a href="">CADASTRO DE TANQUES</a>

        <a href="">CONSULTAS</a>

    </div>
    )
}