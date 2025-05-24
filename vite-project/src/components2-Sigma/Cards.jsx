import React from 'react'

import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="card" style={{ overflow: "hidden" }}>  {/* The way to use inline CSS  */}
      <img
        src="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png"
        alt="image"
        width={330}
      />
      <h1> {props.title} </h1>
      <p> {props.description} </p>
    </div>
  );
}

export default Cards