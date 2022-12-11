import React, { useState } from "react";
import { Form, ContainerInput, Input, Label, SubmitButton } from "./styles";

function FormSeat({ handleSubmit, selectedSeat}) {
  const [cpf, setCpf] = useState("");
  const [userName, setUserName] = useState("");
  if (selectedSeat.length < 1) {
    return (
      <>
      <h2>Escolha um assento</h2>
      <SubmitButton>!</SubmitButton>
      </>
    )
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e, cpf, userName)}>
      <ContainerInput>
        <Label htmlFor="name">Nome do comprador</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Digete seu nome..."
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          data-test="client-name"
        />
        <Label htmlFor="cpf">CPF do comprador</Label>
        <Input
          id="cpf"
          name="cpf"
          type="text"
          placeholder="Digete seu CPF..."
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          data-test="client-cpf"
          autoComplete="off"
        />
      </ContainerInput>
      <SubmitButton data-test="book-seat-btn" type="submit">Reservar assento(s)</SubmitButton>
    </Form>
  );
}

export default FormSeat;
