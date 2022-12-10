import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import FormSeat from "../../components/FormSeat";
import Seat from "../../components/Seat";
import api from "../../services/api";
import { Container, ContainerSeats, ContainerExample, ButtonExample, Loader } from "./styles";

function Seats() {
  const [movie, setMovie] = useState(null);
  const [database, setDataBase] = useState({});
  let { timeId } = useParams();

  useEffect(() => {
    api
      .get(`/showtimes/${timeId}/seats`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, [timeId]);

  if (movie === null) {
    return <Loader />;
  }
  const defaultData = {
    title: movie.movie.title,
    date: movie.day.date,
    hours: movie.name,
    username: "guilherme",
    cpf: 121,
    selectedSeats: [1, 2, 3],
  };
  console.log(defaultData);
  return (
    <Container>
      <h2>Selecione o(s) assento(s)</h2>

      <ContainerSeats>
        {movie.seats.map((s) => (
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

      <FormSeat />

      <Footer title={movie.movie.title} posterUrl={movie.movie.posterURL}>
        {`${movie.day.weekday} - ${movie.name}`}
      </Footer>
    </Container>
  );
}

export default Seats;
