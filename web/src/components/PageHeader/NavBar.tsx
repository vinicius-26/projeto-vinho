import styles from '../../styles/components/NavBar.module.css'
import Link from 'next/link';
import { useState } from 'react';

export function NavBar({NavBarInvisible}){

    return(
    <div className={styles.navbar}>

        <Link href="/"><a>HOME</a></Link>

        <Link href="/Consultas/Uvas"><a>UVAS</a></Link>

        <Link href="/Consultas/Tanques"><a>TANQUES</a></Link>

        <Link href="/Consultas/Clientes"><a>CLIENTES</a></Link>

        <Link href="/Login"><button onClick={NavBarInvisible}>LOGIN</button></Link>

    </div>
    )
}