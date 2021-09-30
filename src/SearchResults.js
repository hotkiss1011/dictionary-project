import React from "react";
import "./SearchResults.css"

export default function SearchResults(props) {
    if (props.data.length) {
        return (
          <div className="SearchResults">
            <h1 className="word">{props.data[0].hwi.hw}</h1>
            <h2 className="partOfSpeech">{props.data[0].fl}</h2>
            {props.data[0].shortdef.map(function (def, index) {
              return (
                <div key={index}>
                  {index + 1}. {def}
                </div>
              );
            })}
          </div>
        );
    } else {
      return <div className="SearchResults"></div>;
    }
}