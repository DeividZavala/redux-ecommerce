import React from 'react';

export const customInput = props => (
    <div className="uk-margin">
      <label className="uk-form-label">{props.label}</label>
      <div className="uk-form-controls">
        <input className="uk-input" {...props.input} type={props.type} />
      </div>
    </div>
);

export const customTextarea = props => (
    <div className="uk-margin">
      <label className="uk-form-label">{props.label}</label>
      <div className="uk-form-controls">
        <textarea className="uk-textarea" {...props.input} rows="5" placeholder={props.placeholder}></textarea>
      </div>
    </div>
);