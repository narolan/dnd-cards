import React from "react";
import './index.css';

const FormData = (props) => {
    return (
        <div className="form-data-field">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} name={props.name}/>
        </div>
    )
}

export default FormData;