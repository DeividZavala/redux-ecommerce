import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {customInput, customTextarea} from '../common/fields/customFields';

const NewProductForm = ({ handleSubmit }) => (
    <form className="uk-form-stacked uk-text-left" onSubmit={handleSubmit}>
        <div>
            <label >Nombre del producto</label>
            <Field
                name="name"
                component="input"
                type="text"
                label="Nombre del producto"
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
        <button className="uk-button uk-button-primary uk-margin-auto uk-display-block" type="submit">Picale mijo</button>
    </form>
)

export default reduxForm({
    form: "newProduct"
})(NewProductForm)