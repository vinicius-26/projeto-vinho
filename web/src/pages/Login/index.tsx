import React, {useState} from 'react';
import { LoginUsuario } from '../../components/Login/Login';
import { CadastroUsuario } from '../../components/Login/Cadastro';


import styles from './login.module.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  function setLoginForm(){
    setIsLogin(true)
  }

  function setRegisterForm(){
    setIsLogin(false)
  }

    return(
      <div>
          <div className={styles.containerLogin}>
            {isLogin ? <LoginUsuario setRegisterForm={setRegisterForm}/> : <CadastroUsuario setLoginForm={setLoginForm}/>}
          </div>
          
      </div>
        
      );
  }


  export default Login;