import React from 'react';

const ProductCard = ({name, price, desc}) => (
    <div>
        <div className="uk-card uk-card-default uk-text-left">
            <div className="uk-card-media-top">
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="true">

                    <ul className="uk-slideshow-items">
                        <li>
                            <img src="images/photo.jpg" alt="" uk-cover="true" />
                        </li>
                        <li>
                            <img src="images/dark.jpg" alt="" uk-cover="true" />
                        </li>
                        <li>
                            <img src="images/light.jpg" alt="" uk-cover="true" />
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"> </a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"> </a>

                </div>
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{name ? name : "No disponible"}</h3>
                <h5 className="uk-margin-remove-top">Precio: {price ? `$${price}.00` : "No disponible"}</h5>
                <p>{desc ? desc : "No disponible"}</p>
            </div>
        </div>
    </div>
)

export default ProductCard;