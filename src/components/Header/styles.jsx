import styled from "styled-components";
import { shake } from "../../styles/animations";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${props => props.show ? 0 : "-70px"};
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 67px;
  background: #c3cfd9;
  z-index: 2;
  transition: top 0.3s;
  img {
    width: 44px;
    display: block;
    position: absolute;
    left: 0;
    margin-left: 20px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
    cursor: pointer;
    user-select: none;
    :hover {
      animation: ${shake}  0.8s linear ;
    }
  }
`;
