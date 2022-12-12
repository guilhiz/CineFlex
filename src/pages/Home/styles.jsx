import styled, { keyframes } from "styled-components";
import c from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 375px;
  gap: 27px 46px;
  margin: 0px auto;
  padding: 90px 0px 35px;
  background-color: ${c.background};
  > h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${c.subTitle};
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
