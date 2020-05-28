import React, { Component } from "react";
import Table from "../Table";
import Row from "../Row";
import Search from "../Search";
import API from "../../utils/api";

class Container extends Component {
    state = {
        result: {}
    }

    searchEmployees = () => {
        API.search()
        .then(res => {
            this.setState({ result: res.data.results })
            console.log(res.data.results);
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.searchEmployees();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">
                        <Search/>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <Table>
                        <Row/>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Container;
