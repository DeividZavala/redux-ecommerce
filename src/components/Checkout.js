import React, { useState } from "react";
import Cards from "react-credit-cards";
import { connect } from "react-redux";
import "react-credit-cards/es/styles-compiled.css";
import { doPayment } from "../redux/ducks/order";

// 1.- crear un "duck" reducer, thunk all in one place **

// 2.- usar el thunk adecuado para almacenar en redux la targeta
// 3.- al dar clic en pagar el render muestre un "pagado con exito"

function Checkout({ doPayment, items, total, quantity, history }) {
  let [card, setCard] = useState({
    number: 2,
    focused: null
  });

  function onChange(e) {
    let data = {};
    data[e.target.name] = e.target.value;
    setCard({ ...card, ...data });
  }

  function onFocus() {
    setCard({ ...card, focused: "cvc" });
  }

  function onBlur() {
    setCard({ ...card, focused: null });
  }

  function onDoPayment() {
    doPayment(card).then(order => {
      history.push("/confirmation");
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ border: "1px solid black", padding: 50 }}>
        <h2>Datos de pago</h2>
        <Cards
          number={card.number}
          name={card.name}
          expiry={card.expiry}
          cvc={card.cvc}
          focused={card.focused}
        />
        <div>
          Numero
          <input
            className="uk-input"
            onChange={onChange}
            name="number"
            type="text"
          />
          <br />
          Nombre
          <input
            className="uk-input"
            onChange={onChange}
            name="name"
            type="text"
          />
          <br />
          Fecha de expiración
          <input onChange={onChange} name="expiry" type="text" />
          Código de seguridad
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            name="cvc"
            type="text"
          />
        </div>
        <button
          onClick={() => onDoPayment(card)}
          className="uk-button uk-button-secondary uk-margin"
        >
          Pagar
        </button>
      </div>

      <div style={{ border: "1px solid black", padding: 50 }}>
        <h2>{quantity} productos</h2>
        <h3>Total: $ {total} MXN</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.map((product, i) => {
            return (
              <div style={{ border: "1px solid black", padding: 10 }} key={i}>
                <img width="100" src={product.images} />
                <p>
                  {product.quantity} X ${product.price}MXN
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function mstp(state, props) {
  if (state.cart.items.length < 1) props.history.goBack();
  return {
    items: state.cart.items,
    total: state.cart.total,
    quantity: state.cart.quantity
  };
}

export default connect(
  mstp,
  { doPayment }
)(Checkout);
