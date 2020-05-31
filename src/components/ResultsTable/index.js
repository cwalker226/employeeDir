import React from "react";
import "./style.css";
import { Table } from "react-bootstrap";

function ResultsTable(props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" style={{cursor: "pointer"}} onClick={() => props.onClick("name.last")}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    );
}

export default ResultsTable;
