import styles from '../../styles/components/NavBar.module.css'
import Link from 'next/link';

export function NavBar(){
    return(
    <div className={styles.navbar}>

        <Link href="/"><a>HOME</a></Link>

        <a href="">CADASTRO DE UVAS</a>

        <a href="">CADASTRO DE TANQUES</a>

        <a href="">CONSULTAS</a>

    </div>
    )
}