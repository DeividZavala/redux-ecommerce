import React from 'react';

const ProductCard = ({values}) => (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 className="uk-card-title">{values && values.name ? values.name : "No disponible"}</h3>
        <p>Costo: {values && values.price ? values.price : "No disponible"}</p>
    </div>
)

export default ProductCard;