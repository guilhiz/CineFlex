import styled, { keyframes } from "styled-components";

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

export const shake = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    transform: scale3d(1, 1, 1);
   }
`;

export const fallingScreen = keyframes`
  from{
    opacity:0;
    transform: translateY(-500px)
  }
  to{
    opacity:1;
    transform: translateY(0px)
  }
`;
