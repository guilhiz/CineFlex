import React from "react";
import { Poster, Overlay } from "./styles";
import { Link } from "react-router-dom";

function Movie(props) {
  const { img, title, id } = props;
  return (
    <Link to={`/Sessions/${id}`}>
    <Poster>
      <img src={img} alt="" />
      <Overlay>
        <div>{title}</div>
      </Overlay>
    </Poster>
    </Link>
  );
}

export default Movie;
