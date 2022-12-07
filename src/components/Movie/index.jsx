import React from "react";
import { Poster, Overlay } from "./styles";

function Movie(props) {
  const { img, title } = props;
  return (
    <Poster>
      <img src={img} alt="" />
      <Overlay>
        <div>{title}</div>
      </Overlay>
    </Poster>
  );
}

export default Movie;
