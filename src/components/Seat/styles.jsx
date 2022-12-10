import styled from "styled-components";

export const SeatButton = styled.button`
  width: 26px;
  height: 25px;
  background: ${(props) => (props.clicked ? "#1AAE9E" : "#C3CFD9")};
  border: 1px solid ${(props) => (props.clicked ? "#0E7D71  " : "#808f9d")};
  border-radius: 12px;
  cursor: ${(props) => (props.available ? "pointer" : "not-allowed")};
  & {
    background-color: ${(props) => !props.available && "#FBE192"};
    border-color: ${(props) => !props.available && "#F7C52B"};
  }
  :hover {
    opacity: 0.6;
  }
`;
