import React from 'react';
import '../styles/Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
              <img className="image-name" src="/assets/nfx.png" alt="nfx"/>

            <h1 className="title">Iniciar sesión</h1>
            <p className="subtitle">Ingresa los datos para entrar a tu cuenta</p>

            <form action="/" className="form">
                <label for="password" className="label">Correo electrónico</label>
                <input type="email" id="user" placeholder="ejemplo@xyz.com" className="input input-user" />

                <label for="new-password" className="label">Contraseña</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />

                <input type="submit" value="Confirm" className="primary-button login-button" />
            </form>
            </div>
        </div>
    );
};

export default Login;