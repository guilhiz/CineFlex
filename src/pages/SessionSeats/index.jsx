import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import FormSeat from "../../components/FormSeat";
import Seat from "../../components/Seat";
import api from "../../services/api";
import { Container, ContainerSeats, ContainerExample, ButtonExample } from "./styles";
import { Loader } from "../../styles/animations";

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

  function removeClick() {
      let arr = [];
      arr = selectedSeatIds.pop();
      setSelectedSeatIds([...selectedSeatIds]);
      arr = selectedSeatNumber.pop();
      setSelectedSeatNumber([...selectedSeatNumber]);
  }

  function handleSubmit(e, cpf, userName) {
    e.preventDefault();
    const body = {
      ids: selectedSeatIds,
      name: userName,
      cpf,
    };
    const data = {
      seatNumber: selectedSeatNumber,
      title: movie.movie.title,
      date: movie.day.date,
      hours: movie.name,
      cpf,
      userName,
    };

    api
      .post("/seats/book-many", body)
      .then(() => navigate("/sucesso", { state: data }))
      .catch((erro) => console.log(`Ocorreu um erro ${erro}`));
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
            removeClick={removeClick}
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
      <FormSeat handleSubmit={handleSubmit} selectedSeat={selectedSeatNumber} />
      <Footer title={movie.movie.title} posterUrl={movie.movie.posterURL}>
        {`${movie.day.weekday} - ${movie.name}`}
      </Footer>
    </Container>
  );
}

export default Seats;
