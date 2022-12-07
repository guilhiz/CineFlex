import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";

import GlobalStyle from "../../GlobalStyle";

function Sessions() {
  let { movieId } = useParams();

  useEffect(() => {
    api.get(`/movies/${movieId}/showtimes`)
    .then(response => console.log(response.data))
    .catch(erro => console.log(erro))
  })

  return (
    <Container>
      <GlobalStyle />
      <h2>Selecione o horário</h2>
      <div>

      </div>
    </Container>
  );
}

export default Sessions;
