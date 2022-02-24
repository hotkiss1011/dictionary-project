import React from "react";
import axios from "axios";

export default function DisplayDefinition(props, response) {
  function handleResponse(response) {
    console.log(response);
  }

  return (
    <div className="DisplayDefinition">
      <h1>Hello from Display Definition!</h1>
    </div>
  );
}