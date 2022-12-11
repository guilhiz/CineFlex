import React, { useState } from "react";
import { SeatButton } from "./styles";

function Seat(props) {
  const { number, isAvailable, id, setSelectedSeatIds, setSelectedSeatNumber, removeClick } = props;
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!isAvailable) return alert("Esse assento não está disponível");
    if (clicked) {
      if (window.confirm("Você realmente deseja desmarcar este assento?")) {
        removeClick(id, number);
        setClicked(!clicked);
        return;
      }
    }
    setSelectedSeatIds((c) => [...c, id]);
    setSelectedSeatNumber((c) => [...c, number]);
    setClicked(!clicked);
  }

  return (
    <SeatButton data-test="seat" onClick={() => handleClick()} clicked={clicked} available={isAvailable}>
      {number}
    </SeatButton>
  );
}

export default Seat;
