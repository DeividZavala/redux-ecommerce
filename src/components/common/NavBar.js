import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

function NavBar({quantity}){
    return(
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
                <li style={{cursor:"pointer"}} className="uk-flex uk-flex-middle uk-margin-right">
                 <span className="uk-inline uk-padding-small" uk-icon="icon: cart; ratio: 2">
                    <span className="uk-badge uk-position-top-right">{quantity}</span>
                 </span>
                
                </li>
            </ul>

        </div>
    </nav>
    )
}

function mstp(state){
    return {
        quantity: state.cart.quantity
    }
}

export default connect(mstp)(NavBar)