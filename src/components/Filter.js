import { Form, Row, Col } from 'react-bootstrap';
import React from 'react';
import Rating from './Rating';

const Filter = ({ setSearchValue, setRateValue, rateValue }) => {

    return (
        <Form.Group as={Row} controlId="formBasicRange">
            <Col sm="6">
                <Rating setRateValue={setRateValue} rate={rateValue} />
            </Col>
            <Col sm="6">
                <Form.Control type="text" placeholder="Search" onChange={(e) => { setSearchValue(e.target.value) }} />
            </Col>
        </Form.Group>
    );
}
export default Filter;