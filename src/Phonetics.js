import React from "react";
import "./Phonetics.css"

export default function Phonetics(props) {
    return (
      <div className="Phonetics">
          <p>{props.audio[0].text}</p>
        <a href={props.audio[0].audio} target="_blank" rel="noreferrer">
          <i class="fas fa-volume-up"></i>
        </a>
      </div>
    );
}