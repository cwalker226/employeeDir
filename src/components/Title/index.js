import React from "react";
import "./style.css";
import { Jumbotron } from "react-bootstrap";

function Title() {
  return (
      <Jumbotron>
            <h1 className="title">Employee Directory</h1>
            <p>Click on carrots to sort by heading or use the search box to narrow your results.</p>
      </Jumbotron>
    );
}

export default Title;