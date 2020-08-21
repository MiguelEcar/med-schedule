import React from 'react';

import {
    Form,
    Col
} from 'react-bootstrap';

import { getIn } from 'formik';

export const Select = (props) => {

    return (

        <Form.Group as={Col} md={props.col} controlId={'id_' + props.name}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                as='select'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                rows={props.rows}
                onChange={(e) => {
                    props.handleChange(e);
                }}
                isValid={getIn(props.touched, props.name) && !getIn(props.errors, props.name)}
                isInvalid={getIn(props.touched, props.name) && getIn(props.errors, props.name)}
            >
                <option key={-1}>Choose...</option>
                {props.list &&
                    props.list.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                }
            </Form.Control>
            <Form.Control.Feedback type='invalid' tooltip>
                {getIn(props.errors, props.name)}
            </Form.Control.Feedback>
        </Form.Group>
    )

};

Select.defaultProps = {
    col: 12,
    type: 'text',
};