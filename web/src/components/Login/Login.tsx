import styles from '../../styles/components/Login/Login.module.css'
import Link from 'next/link';

export function LoginUsuario({setRegisterForm}){
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
      

          <Link href="/"><button className={styles.loginButtonEntrar}>Entrar</button></Link>

          <p>Não tem uma conta?</p>

          <a onClick={setRegisterForm}> Cadastrar-se</a>
          
        </form>
      </div>
    </div>
  )
}