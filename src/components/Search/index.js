import React, { Component } from "react";
import "./style.css";

class Search extends Component {
    render() {
        return (
            <form className="form">
                <input
                    className="form-control"
                    name="search"
                    type="text"
                    placeholder="Search"
                />
            </form>
        );
    }
}

export default Search;
