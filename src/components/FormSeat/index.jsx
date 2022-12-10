import React, { useState } from "react";
import { Form, ContainerInput, Input, Label, SubmitButton } from "./styles";

function FormSeat({handleSubmit}) {
  const [cpf, setCpf] = useState("");
  const [userName, setUserName] = useState("");

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
        />
      </ContainerInput>
      <SubmitButton type="submit">Reservar assento(s)</SubmitButton>
    </Form>
  );
}

export default FormSeat;
