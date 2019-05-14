import React from 'react';
import { Field, reduxForm } from 'redux-form';

const NewProductForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label >Nombre del producto</label>
            <Field
                name="name"
                component="input"
                type="text"
            />
        </div>
        <div>
            <label >Precio del producto</label>
            <Field
                name="price"
                component="input"
                type="number"
            />
        </div>
        <button type="submit">Picale mijo</button>
    </form>
)

export default reduxForm({
    form: "newProduct"
})(NewProductForm)