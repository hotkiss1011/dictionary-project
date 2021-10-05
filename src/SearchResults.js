import React from "react";
import "./SearchResults.css"
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function SearchResults(props) {
  console.log(props.data);
    if (props.data) {
        return (
          <div className="SearchResults">
            <h1 className="word">{props.data.word}</h1>

            <Phonetics audio={props.data.phonetics} />

            {props.data.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        );
    } else {
      return <div className="SearchResults"></div>;
    }
}