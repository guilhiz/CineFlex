import React from "react";
import { Container, ContainerButton } from "./styles";

function SessionDay(props) {
  const {weekday, date, time} = props

  return (
    <Container>
      <p>{`${weekday} - ${date}`}</p>
      <ContainerButton>
        {time.map(t => <button>{t.name}</button>)}
      </ContainerButton>
    </Container>
  );
}

export default SessionDay;
