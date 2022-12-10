import React, { useState } from "react";
import { SeatButton } from "./styles";

function Seat(props) {
  const { number, isAvailable, id, setSelectedSeatIds, setSelectedSeatNumber } = props;
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!isAvailable) {
      return alert("Esse assento não está disponível");
    }

    setSelectedSeatIds((c) => [...c, id]);
    setSelectedSeatNumber((c) => [...c, number]);
    setClicked(!clicked);
  }

  return (
    <SeatButton onClick={() => handleClick()} clicked={clicked} available={isAvailable}>
      {number}
    </SeatButton>
  );
}

export default Seat;
