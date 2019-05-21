import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../common/ProductCard';
import { onFetch, onSetProduct } from '../../redux/ducks/products';
import {addToCart} from '../../redux/ducks/cart'


class ListProductsContainer extends PureComponent{

    componentDidMount(){
        this.props.onFetch();
    }

    setProduct = product => {
        this.props.onSetProduct(product)
    }

    drawProductCart =  (product, index) => {
        return <ProductCard 
                addToCart={this.props.addToCart}
                setProduct={this.setProduct} 
                product = {product}
                {...product} 
                key={index} 
                />
    } 

    render(){
        const {products = []} = this.props;
        return(
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid-match uk-grid-small uk-child-width-1-4" uk-grid="true">
                        {
                            products.length > 0 &&
                            products.map(this.drawProductCart)
                        
                        }
                    </div>
                    {products.length === 0 && (
                        <div className="uk-alert-primary" uk-alert="true">
                            <p>No hay productos por el momento</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    let {products} = state;
    products = Object.values(products.items);
    return {
        products
    }
}

export default connect(mapStateToProps, {onFetch, addToCart,onSetProduct})(ListProductsContainer);