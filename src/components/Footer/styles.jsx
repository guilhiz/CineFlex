import styled from "styled-components";
import c from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 117px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: ${c.header};
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 287px;
    height: 89px;
    margin-left: 22px;
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 30px;
      color: ${c.subTitle};
      margin: 0px;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 89px;
  background: #c4c4cc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  margin-left: 10px;
  img {
    width: 57px;
    height: 80px;
    border-radius: 3px;
    :hover {
      scale: 1.1;
    }
  }
`;
