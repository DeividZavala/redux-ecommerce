import React from 'react';

const ProductCard = ({values}) => (
    <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
        <h3 class="uk-card-title">{values ? values.name : "No disponible"}</h3>
        <p>Costo: {values ? values.price : "No disponible"}</p>
    </div>
)

export default ProductCard;