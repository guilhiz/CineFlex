import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  margin: 67px auto 115px;
  padding: 23px 24px 0px;
  background-color: #e5e5e5;
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