import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  margin: 15px 0px;
  padding: 0px 24px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;
  color: #293845;
`;

export const ContainerButton = styled.div`
  margin-top: 22px;
  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-radius: 3px;
    margin-right: 8px;
    border: none;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    :hover {
      opacity: 0.7;
    }
    :active {
      scale: 0.9;
    }
  }
`;
