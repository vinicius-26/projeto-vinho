import styles from '../../styles/components/Login.module.css'

export function LoginUsuario(){
    return(
    
        <div className={styles.containerLogin}>
            <div className={styles.login}>

            <div className={styles.loginTitle}>
                <span>Login </span>
                <img src="img/garrafa-de-vinho.png" alt="" />
            </div>

                <form id="login" action="">     
                    
                    <label htmlFor="">Usuário</label>

                    <input type="text" />

                    <label htmlFor="">Senha</label>
                    <input type="password" />
                

                    <button className={styles.loginButtonEntrar}>Entrar</button>

                    <p>Não tem uma conta?</p>

                    <a href=""> Cadastrar-se</a>
                </form>
            </div>
        </div>
    )
}