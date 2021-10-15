import styles from '../../styles/components/NavBar.module.css'
import Link from 'next/link';

export function NavBar(){
    return(
    <div className={styles.navbar}>

        <Link href="/"><a>HOME</a></Link>

        <a href="">UVAS</a>

        <Link href="/Consultas/Tanques"><a >TANQUES</a></Link>

        <a href="">CONSULTAS</a>

    </div>
    )
}