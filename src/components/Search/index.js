import React from "react";
import "./style.css";

function Search(props) {
    return (
        <form className="form" onSubmit={props.searchLastName}>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                className="form-control"
                name="search"
                type="text"
                placeholder="Search"
            />
        </form>
    );
}

export default Search;
