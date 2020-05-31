import React from "react";
import "./style.css";
import { Form } from "react-bootstrap";

function Search(props) {
    return (
        <Form onSubmit={props.searchLastName}>
            <Form.Control
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                placeholder="Search"
            />
        </Form>
    );
}

export default Search;
