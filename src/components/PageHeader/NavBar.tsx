import styles from '../../styles/components/NavBar.module.css'

export function NavBar(){
    return(
    <div className={styles.navbar}>
        <a href="">HOME</a>

        <a href="">CADASTRO DE UVAS</a>

        <a href="">CADASTRO DE TANQUES</a>

        <a href="">CONSULTAS</a>

    </div>
    )
}