import React from 'react';
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Fixterstore</a></li>
                <li><a href="#">Catalogo</a></li>
            </ul>

        </div>

        <div className="uk-navbar-right">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Iniciar sesión</a></li>
                <li>
                    <a href="#">David Zavala</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Perfil</a></li>
                            <li><a href="#">Nuevo producto</a></li>
                            <li><a href="#">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </li>
            </ul>

        </div>
    </nav>
    <Router/>
    </div>
  );
}

export default App;
