import React from "react";
import { connect } from "react-redux";

function Confirmation({ orders }) {
  const orderIds = Object.keys(orders);
  const currentOrderId = orderIds[orderIds.length - 1];
  return (
    <div className="uk-section">
      <div className="uk-container uk-alert-success">
        <div>
          <span uk-icon="icon:check; ratio: 4" />
        </div>
        <div>Tu orden No. {currentOrderId} se creó con éxito</div>
      </div>
    </div>
  );
}

const mstp = state => state;

export default connect(mstp)(Confirmation);
