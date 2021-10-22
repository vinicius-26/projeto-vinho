import React from 'react';
import { LoginUsuario } from '../../components/Login/Login';

import styles from './login.module.css';

const Login = () => {
    return(
      <div>
          <div className={styles.containerLogin}>
            <LoginUsuario />
          </div>
          
      </div>
        
      );
  }


  export default Login;