import React from 'react';

export const customInput = ({label, type, meta, ...props}) => (
    <div className="uk-margin">
      <label className="uk-form-label">{label}</label>
      <div className="uk-form-controls">
        <input className={`uk-input ${(meta.error && meta.touched) ? 'uk-form-danger' : '' }`} {...props.input} type={type} />
      </div>
      {(meta.error && meta.touched)&& (
        <div className="uk-alert-danger" uk-alert="true">
            <p>{meta.error}</p>
        </div>
      )}
    </div>
);

export const customTextarea = ({label, meta, ...props}) => (
    <div className="uk-margin">
      <label className="uk-form-label">{label}</label>
      <div className="uk-form-controls">
        <textarea className={`uk-textarea ${(meta.error && meta.touched) ? 'uk-form-danger' : '' }`} {...props.input} rows="5" placeholder={props.placeholder}></textarea>
      </div>
      {(meta.error && meta.touched)&& (
        <div className="uk-alert-danger" uk-alert="true">
            <p>{meta.error}</p>
        </div>
      )}
    </div>
);