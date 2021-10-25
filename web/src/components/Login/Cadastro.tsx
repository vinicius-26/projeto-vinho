import styles from '../../styles/components/Login/Cadastro.module.css'

export function CadastroUsuario({setLoginForm}){
    return(
    
        <div className={styles.containerCadastro}>
            <div className={styles.welcomeCadastro}>
                
                <span>Bem-vindo à tela de <br/> cadastro</span>
                <br />
                <p>Está quase tudo pronto para começar...</p>
                
            </div>

            <div className={styles.cadastroUsuario}>

                <div className={styles.cadastroTitle}>
                    <img src="img/barril.png" alt="" />
                    <span>Cadastro </span>
                </div>

                <form action="">
                    <label htmlFor="">Nome de Usuário</label>
                    <input type="text" />

                    <label htmlFor="">Tipo de cadastro</label>

                    <select required>
                        <option value="" disabled selected>Selecione uma opção...</option>
                        <option value="1">Produtor</option>
                        <option value="2">Fermentador</option>
                        <option value="3">Admin</option>
                    </select>

                    <label htmlFor="">Senha</label>
                    <input type="password" />

                    <label htmlFor="">Confirmar senha</label>
                    <input type="password" />

                </form>
                <div className={styles.cadastroButton}>
                    <button>Cadastrar-se</button>
                </div>
                <p>Já possui uma conta?</p>
                <a onClick={setLoginForm}>Login</a> 
            </div>
        </div>
    )
}