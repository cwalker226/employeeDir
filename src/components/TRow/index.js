import React from "react";
import "./style.css";

function Row(props) {
  return (
    <tr>
        <td><img src={props.picture} alt=""/></td>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
    </tr>
  );
}

export default Row;