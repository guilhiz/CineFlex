import React from "react";
import { Poster, Overlay, Border } from "./styles";
import { Link } from "react-router-dom";

function Movie(props) {
  const { img, title, id } = props;
  return (
    <Link data-test="movie" to={`/Sessions/${id}`}>
      <Border>
        <Poster>
          <img src={img} alt="" />
          <Overlay>
            <div>{title}</div>
          </Overlay>
        </Poster>
      </Border>
    </Link>
  );
}

export default Movie;
