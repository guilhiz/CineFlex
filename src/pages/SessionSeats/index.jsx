import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import FormSeat from "../../components/FormSeat";
import Seat from "../../components/Seat";
import api from "../../services/api";
import { Container, ContainerSeats, ContainerExample, ButtonExample, Loader } from "./styles";

function Seats() {
  const [movie, setMovie] = useState(null);
  const [selectedSeatIds, setSelectedSeatIds] = useState([]);
  const [selectedSeatNumber, setSelectedSeatNumber] = useState([]);
  let { timeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/showtimes/${timeId}/seats`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, [timeId]);

  function handleSubmit(e, cpf, userName) {
    e.preventDefault();
    const body = {
      ids: selectedSeatIds,
      name: userName,
      cpf,
    };
    api
      .post("/seats/book-many", body)
      .then((response) => console.log(response))
      .catch((erro) => console.log(`Ocorreu um erro ${erro}`));

    const data = {
      seatNumber: selectedSeatNumber,
      title: movie.movie.title,
      date: movie.day.date,
      hours: movie.name,
      cpf,
      userName,
    };

    navigate("/sucesso", { state: data });
  }

  if (movie === null) {
    return <Loader />;
  }

  return (
    <Container>
      <h2>Selecione o(s) assento(s)</h2>

      <ContainerSeats>
        {movie.seats.map((s) => (
          <Seat
            key={s.id}
            number={s.name}
            id={s.id}
            isAvailable={s.isAvailable}
            setSelectedSeatIds={setSelectedSeatIds}
            setSelectedSeatNumber={setSelectedSeatNumber}
          />
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

      <FormSeat handleSubmit={handleSubmit} />

      <Footer title={movie.movie.title} posterUrl={movie.movie.posterURL}>
        {`${movie.day.weekday} - ${movie.name}`}
      </Footer>
    </Container>
  );
}

export default Seats;
