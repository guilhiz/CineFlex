import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  margin: 67px auto 115px;
  padding: 23px 20px 100px;
  background-color: #e5e5e5;
  > h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    text-align: center;
  }
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  margin: 12px 0px 40px;
`;

export const ContainerExample = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
  width: 100%;
  margin-top: 15px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;

export const ButtonExample = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  margin: 10px 0px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
  > input {
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
  }
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

const loader = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin: 200px auto 0px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  border-left: 16px solid #3498db;
  width: 180px;
  height: 180px;
  animation: ${loader} 0.8s linear infinite;
`;
