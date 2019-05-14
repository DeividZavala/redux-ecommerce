import React, {Component} from 'react';
import NewProductForm from './NewProductForm';
import {connect} from 'react-redux';
import ProductCard from '../common/ProductCard';

class NewProductContiner extends Component{

    submit = values => {
        console.log(values)
    };

    render(){
        console.log(this.props);
        const {newProduct} = this.props;
        return (
            <div>
                <NewProductForm onSubmit={this.submit} />
                <ProductCard {...newProduct} />
            </div>
        )
    }
}

const mapStateToProps = (state) => state.form;

export default connect(mapStateToProps, {})(NewProductContiner);