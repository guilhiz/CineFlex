import styled from "styled-components";
import c from "../../constants/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  margin: 67px auto 115px;
  padding: 23px 24px 0px;
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


export const ContainerSession = styled.div`
  margin-top: 26px;
`;
