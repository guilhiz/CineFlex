import React, { useState } from "react";
import { SeatButton } from "./styles";

function Seat(props) {
  const { number, isAvailable } = props;
  const [clicked, setClicked] = useState(false);

  function handleClick(Available) {
    if (!Available) {
      return alert("Esse assento não está disponível");
    }
    setClicked(!clicked);
  }

  return (
    <SeatButton onClick={() => handleClick(isAvailable)} clicked={clicked} available={isAvailable}>
      {number}
    </SeatButton>
  );
}

export default Seat;
