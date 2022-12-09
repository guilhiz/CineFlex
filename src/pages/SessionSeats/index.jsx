import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Seat from "../../components/Seat";
import api from "../../services/api";
import {
  Container,
  ContainerSeats,
  ContainerExample,
  ButtonExample,
  ContainerInput,
  SubmitButton,
  Loader,
} from "./styles";

function Seats() {
  const [movieSeats, setMovieSeats] = useState(null);
  let { timeId } = useParams();

  useEffect(() => {
    api
      .get(`/showtimes/${timeId}/seats`)
      .then((response) => setMovieSeats(response.data))
      .catch((error) => console.log(error));
  }, [timeId]);

  if (movieSeats === null) {
    return <Loader />;
  }
  console.log(movieSeats.movie.title);
  return (
    <Container>
      <h2>Selecione o(s) assento(s)</h2>

      <ContainerSeats>
        {movieSeats.seats.map((s) => (
          <Seat key={s.id} number={s.name} isAvailable={s.isAvailable} />
        ))}
        <ContainerExample>
          <div>
            <ButtonExample color="#1aae9e" borderColor="#0e7d71"></ButtonExample>
            Selecionado
          </div>
          <div>
            <ButtonExample color="#c3cfd9" borderColor="#7b8b99"></ButtonExample>
            Disponível
          </div>
          <div>
            <ButtonExample color="#fbe192" borderColor="#f7c52b"></ButtonExample>
            Indisponível
          </div>
        </ContainerExample>
      </ContainerSeats>

      <form>
        <ContainerInput>
          <label htmlFor="name">Nome do comprador</label>
          <input id="name" name="name" type="text" placeholder="Digete seu nome..." />
          <label htmlFor="cpf">CPF do comprador</label>
          <input id="cpf" name="cpf" type="text" placeholder="Digete seu CPF..." />
        </ContainerInput>
        <SubmitButton>Reservar assento(s)</SubmitButton>
      </form>

      <Footer title={movieSeats.movie.title} posterUrl={movieSeats.movie.posterURL}>
        {`${movieSeats.day.weekday} - ${movieSeats.name}`}
      </Footer>
    </Container>
  );
}

export default Seats;
