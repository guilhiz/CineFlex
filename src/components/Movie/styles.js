import styled from "styled-components";

export const Poster = styled.div`
  position: relative;
  width: 129px;
  height: 193px;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  :hover {
    scale: 1.1;
    div {
      height: 100%;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  transition: 0.5s ease;
  div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    color: white;
    font-size: 20px;
    position: absolute;
    top: 80%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
