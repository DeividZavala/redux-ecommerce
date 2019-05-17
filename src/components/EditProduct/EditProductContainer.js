import React, {Component} from 'react';
import NewProductForm from './NewProductForm';
import {connect} from 'react-redux';
import ProductCard from '../common/ProductCard';
import {onEditProduct} from '../../redux/ducks/products';

class EditProductContainer extends Component{

    submit = values => {
        console.log(values);
    };

    render(){
        const { newProduct = {values: {name:"", price: ""}} } = this.props;
        const { values } = newProduct;
        return (
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid-match uk-child-width-1-2" uk-grid="true">
                        <div>
                            <NewProductForm onSubmit={this.submit} />
                        </div>
                        <div>
                            <ProductCard {...values} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state.form;

export default connect(mapStateToProps, {onEditProduct})(EditProductContainer);