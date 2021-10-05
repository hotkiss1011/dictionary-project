import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    console.log(props.synonyms.synonyms);
    if (props.synonyms.synonyms.length) {
        return (
          <div className="Synonyms">
            <h5>Synonyms:</h5>
            <ul>
              {props.synonyms.synonyms.map(function (syn, index) {
                return <li key={index}>{syn}</li>;
              })}
            </ul>
          </div>
        );
    } else {
        return null;
    };
}