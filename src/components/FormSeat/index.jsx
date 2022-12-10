import React from "react";
import { Form, ContainerInput, Input, Label, SubmitButton } from "./styles";

function FormSeat() {
  return (
    <Form>
      <ContainerInput>
        <Label htmlFor="name">Nome do comprador</Label>
        <Input id="name" name="name" type="text" placeholder="Digete seu nome..." required />
        <Label htmlFor="cpf">CPF do comprador</Label>
        <Input id="cpf" name="cpf" type="text" placeholder="Digete seu CPF..." required />
      </ContainerInput>
      <SubmitButton>Reservar assento(s)</SubmitButton>
    </Form>
  );
}

export default FormSeat;
