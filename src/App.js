import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook Logo"
          className="fb-logo"
        />
        <div className="login-form">
          <input type="text" placeholder="Email ou telefone" />
          <input type="password" placeholder="Senha" />
          <button className="login-button">Entrar</button>
          <a href="https://www.facebook.com">Esqueceu a senha?</a>
        </div>
        <div className="create-account">
          <a href="https://www.facebook.com/r.php">Criar nova conta</a>
        </div>
      </div>
    </div>
  );
}

export default App;
