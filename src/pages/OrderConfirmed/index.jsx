import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, ContainerInfo, InfoList, ButtonHome } from "./styles";

function OrderConfirmed() {
  const location = useLocation();
  const { seatNumber, title, date, hours, cpf, userName } = location.state;

  return (
    <Container>
      <h2>Pedido feito com sucesso!</h2>
      <ContainerInfo data-test="movie-info">
        <h3>Filme e sessão</h3>
        <p>{title}</p>
        <p>{`${date} ${hours}`} </p>
      </ContainerInfo>

      <ContainerInfo data-test="seats-info">
        <h3>Ingressos</h3>
        <InfoList>
          {seatNumber.map((n) => (
            <li key={n}>{`Assento ${n}`}</li>
          ))}
        </InfoList>
      </ContainerInfo>

      <ContainerInfo data-test="client-info">
        <h3>Comprador</h3>
        <p>{`Nome: ${userName}`}</p>
        <p>{`CPF: ${cpf}`} </p>
      </ContainerInfo>

      <Link to="/">
        <ButtonHome data-test="go-home-btn">Voltar pra Home</ButtonHome>
      </Link>
    </Container>
  );
}

export default OrderConfirmed;
