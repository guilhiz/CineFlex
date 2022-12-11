import styled from "styled-components";
import c from "../../constants/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  margin: 67px auto 115px;
  padding: 23px 20px 100px;
  background-color: ${c.background};
  > h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${c.subTitle};
    text-align: center;
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
