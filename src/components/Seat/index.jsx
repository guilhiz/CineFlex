import React from "react";
import { SeatButton } from "./styles";

function Seat(props) {
  const {number, isAvailable} = props
  return (
    <SeatButton>
      {number}
    </SeatButton>
  );
}

export default Seat;
