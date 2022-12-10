import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #293845;
`;

export const Input = styled.input`
  height: 51px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  margin: 5px 0px 18px;
  padding-left: 18px;

  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #afafaf;
`;

export const SubmitButton = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  margin-top: 57px;
  border: none;
  cursor: pointer;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: #ffffff;

  :active {
    scale: 0.9;
  }
  :hover {
    opacity: 0.7;
  }
`;
