import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {customInput, customTextarea} from '../common/fields/customFields';
import {isRequired, minLng, maxLng, maxCharacters, minPrice, minImages} from '../../utils/validators';

const NewProductForm = ({ handleSubmit }) => (
    <form className="uk-form-stacked uk-text-left" onSubmit={handleSubmit}>
        
        <Field
            name="name"
            component={customInput}
            type="text"
            label="Nombre del producto:"
            validate={[isRequired, minLng, maxLng]}
            normalize={maxCharacters}
        />
        
        <Field
            name="price"
            component={customInput}
            type="number"
            label="Precio del producto:"
            validate={[minPrice]}
        />

        <Field
            name="desc"
            component={customTextarea}
            label="Descripción del producto:"
        />

        <Field
            name="images"
            component={customTextarea}
            label="Imagenes del producto:"
            validate={[minImages]}
        />
        
        <button className="uk-button uk-button-primary uk-margin-auto uk-display-block" type="submit">Picale mijo</button>
    </form>
)

export default reduxForm({
    form: "newProduct"
})(NewProductForm)