import React from "react";
import "./style.css";

function Row(props) {
  return (
    <tr>
        <td><img src={props.picture} alt=""/></td>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{(new Date(props.dob).getMonth()+1) + "-" + new Date(props.dob).getDate() + "-" + new Date(props.dob).getFullYear()}</td>
    </tr>
  );
}

export default Row;