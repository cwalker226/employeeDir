import React, { Component } from "react";
import ResultsTable from "../ResultsTable";
import Search from "../Search";
import API from "../../utils/api";
import { Container, Row, Col } from "react-bootstrap";
import TRow from "../TRow";

class SearchContainer extends Component {
    state = {
        results: []
    }

    searchEmployees = () => {
        API.search()
        .then(res => {
            this.setState({ results: res.data.results })
            console.log("API data", res.data.results);
            console.log("State data", this.state.results);
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.searchEmployees();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col><Search/></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <ResultsTable>
                        {this.state.results.map(result => (
                            <TRow
                                key={result.id.value}
                                picture={result.picture.medium}
                                firstName={result.name.first}
                                lastName={result.name.last}
                                phone={result.phone}
                                email={result.email}
                                dob={result.dob.date}
                            />
                        ))}
                    </ResultsTable>
                </Row>
            </Container>
        );
    }
}

export default SearchContainer;
