import styled from "styled-components";
import c from "../../constants/colors";

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
  color: ${c.text};
`;

export const Input = styled.input`
  height: 51px;
  background: ${c.white};
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  margin: 5px 0px 18px;
  padding-left: 18px;
  background-color: #121414;
  border: 2px solid #121214;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.055em;
  color: ${c.white};

  ::placeholder {
    color: #afafaf;
  }
  :focus {
    outline: 0px;
    border-color: #8257e5;
  }
`;

export const SubmitButton = styled.button`
  width: 225px;
  height: 42px;
  background: ${c.button};
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
  color: ${c.white};

  :active {
    scale: 0.9;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  :disabled {
    background-color: #8d8d8d;
    scale: 1;
    cursor: not-allowed;
    margin: 57px auto 0;
  }
`;
