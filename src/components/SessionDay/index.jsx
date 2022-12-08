import React from "react";
import { Container, ContainerButton } from "./styles";
import { Link } from "react-router-dom";

function SessionDay(props) {
  const { weekday, date, time } = props;

  return (
    <Container>
      <p>{`${weekday} - ${date}`}</p>
      <ContainerButton>
        {time.map((t) => (
         <Link to={`/Seats/${t.id}`} key={t.id}><button>{t.name}</button></Link>
        ))}
      </ContainerButton>
    </Container>
  );
}

export default SessionDay;
