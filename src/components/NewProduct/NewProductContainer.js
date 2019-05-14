import React, {Component} from 'react';
import NewProductForm from './NewProductForm';

class NewProductContiner extends Component{

    handleSubmit = (values) => {
        console.log(values);
    }

    render(){
        return (
            <div>
                <NewProductForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default NewProductContiner;