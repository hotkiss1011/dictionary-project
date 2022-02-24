import React from "react";

export default function Definition(props) {
  return (
    <div className="Definition">
      {props.speech.shortdef.map(function (def, index) {
        return (
          <div key={index}>
            {index + 1}. {def}
          </div>
        );
      })}
    </div>
  );
}