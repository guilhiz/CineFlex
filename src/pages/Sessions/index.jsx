import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, ContainerSession, Loader } from "./styles";
import api from "../../services/api";

import GlobalStyle from "../../GlobalStyle";
import Footer from "../../components/Footer";
import SessionDay from "../../components/SessionDay";

function Sessions() {
  const [movieDay, setMovieDay] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    api
      .get(`/movies/${movieId}/showtimes`)
      .then((response) => setMovieDay(response.data))
      .catch((erro) => console.log(erro));
  }, []);

  if (movieDay === null) {
    return <Loader />;
  }

  return (
    <Container>
      <GlobalStyle />
      <h2>Selecione o horário</h2>
      <ContainerSession>
        {movieDay.days.map(d => <SessionDay weekday={d.weekday} date={d.date} time={d.showtimes} />)}
      </ContainerSession>
      <Footer title={movieDay.title}  posterUrl={movieDay.posterURL} />
    </Container>
  );
}

export default Sessions;
