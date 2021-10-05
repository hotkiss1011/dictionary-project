import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photo.map(function (pic, index) {
            return (
              <div className="col-4" key={index}>
                <a href={pic.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={pic.src.landscape}
                    className="img-fluid"
                    alt={pic.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
