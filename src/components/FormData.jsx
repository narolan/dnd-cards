import React from "react";
import Form from "react-bootstrap/Form";
import './index.css';

const FormData = (props) => {
    return (
        <div className="form-data-field">
            <Form.Label htmlFor={props.name} column="">{props.label}</Form.Label>
            <Form.Control id={props.name} type="text" name={props.name} value={props.value} onChange={props.action}/>
        </div>
    )
}

export default FormData;