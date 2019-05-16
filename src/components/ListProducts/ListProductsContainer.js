import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ProductCard from '../common/ProductCard';

class ListProductsContainer extends PureComponent{
    render(){
        console.log(this.props);
        const {products = []} = this.props;
        return(
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid-match uk-grid-small uk-child-width-1-4" uk-grid="true">
                        {
                            products.length > 0 &&
                            products.map((product, index) => <ProductCard {...product} key={index} />)
                        
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

export default connect(mapStateToProps, {})(ListProductsContainer);