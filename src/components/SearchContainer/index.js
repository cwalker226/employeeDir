import React, { Component } from "react";
import ResultsTable from "../ResultsTable";
import Search from "../Search";
import API from "../../utils/api";
import { Container, Row, Col } from "react-bootstrap";
import TRow from "../TRow";

class SearchContainer extends Component {
    state = {
        results: [],
        search: "",
        sort: "ascending"
    }

    searchEmployees = () => {
        API.search()
        .then(res => {
            this.setState({ results: res.data.results });
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.searchEmployees();
    }

    filterEmployee = event => {
        event.preventDefault();

        if(this.state.search !== ""){
            const employees = this.state.results.filter(result => result.name.last === this.state.search );
            this.setState({ results: employees });
        }else{
            this.searchEmployees();
        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handleSortTable = key => {
        const employees = this.state.results;
        let sortedEmployees = [...employees];
        sortedEmployees.sort((a,b) => {
            const keys = key.split(".");
            for(let i = 0; i < keys.length; i++){
                a = a[keys[i]];
                b = b[keys[i]];
            }
            var x = a.toLowerCase();
            var y = b.toLowerCase();
            if(x < y) {return this.state.sort === "ascending" ? -1 : 1;}
            if(x > y) {return this.state.sort === "ascending" ? 1 : -1;}
            return 0;
        })
        this.setState({ sort: this.state.sort === "ascending" ? "descending" : "ascending" })
        this.setState({ results: sortedEmployees });
    }

    render() {
        return (
            <Container>
                <div className="row my-5">
                    <Col></Col>
                    <Col>
                        <Search 
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            searchLastName={this.filterEmployee}
                        />
                    </Col>
                    <Col></Col>
                </div>
                <Row>
                    <ResultsTable onClick={this.handleSortTable}>
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
