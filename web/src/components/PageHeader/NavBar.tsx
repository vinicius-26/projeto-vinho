import styles from '../../styles/components/NavBar.module.css'
import Link from 'next/link';

export function NavBar(){
    return(
    <div className={styles.navbar}>

        <Link href="/"><a>HOME</a></Link>

        <Link href="/Consultas/Uvas"><a>UVAS</a></Link>

        <Link href="/Consultas/Tanques"><a>TANQUES</a></Link>

        <Link href="/Consultas/Clientes"><a>CLIENTES</a></Link>

        <Link href="/Login"><button>LOGIN</button></Link>

    </div>
    )
}