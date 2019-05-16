import React from 'react';
import Router from './Router';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Fixterstore</a></li>
                <li><Link to="/all-products">Catalogo</Link></li>
            </ul>

        </div>

        <div className="uk-navbar-right">

            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="#">Iniciar sesión</a></li>
                <li>
                    <a href="#">David Zavala</a>
                    <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a href="#">Perfil</a></li>
                            <li><Link to="/new-product">Nuevo producto</Link></li>
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
