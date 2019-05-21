import React from "react";
import { connect } from "react-redux";
import {changeQuantity} from '../../redux/ducks/cart'

const CartList = ({changeQuantity, items, quantity }) => (
  <div id="cart" uk-offcanvas="overlay: true; mode: push; flip: true;">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close="true" />

      <h3>Productos en el carrito</h3>

      {quantity === 0 ? (
        <div class="uk-alert-primary" uk-alert="true">
          <p>Tu carrito está vacío, agrega un producto!</p>
        </div>
      ) : (
        <table class="uk-table uk-table-divider">
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    className="uk-height-small uk-width-auto"
                    src={item.images[0]}
                  />
                </td>

                <td>
                  <h4>{item.name}</h4>
                  <button onClick={()=>changeQuantity("+",index)} >+</button>
                  <p>{item.quantity} X $ {item.price} MXN</p>
                  <button onClick={()=>changeQuantity("-", index)} >-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);

function mstp(state) {
  return {
    items: state.cart.items,
    quantity: state.cart.quantity
  };
}

export default connect(mstp, {changeQuantity})(CartList);
