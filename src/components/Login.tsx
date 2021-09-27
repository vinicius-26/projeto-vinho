import styles from '../styles/components/Login.module.css'

export function Login(){
    return(
    
        <div className={styles.containerLogin}>
            <div className={styles.login}>
                <span>Login</span>

            <form id="login" action="">
                <label htmlFor="">Usuário</label>
                <br />
                <input type="text" />

                <br />

                <label htmlFor="">Senha</label>
                <br />
                <input type="password" />

            </form>

            </div>
            <div className={styles.logoLogin}>
            <img src="img/wine-bottle.png" alt="Logo" />
            <p>Bem-vindo</p>
            </div>
        </div>
    )
}