import React from "react";
import arrow from "../../assets/arrow-left.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Container>
        {location.pathname !== "/" && <img src={arrow} alt="Previous Page" onClick={() => navigate(-1)} />}

        <h1 onClick={() => navigate("/")}>CINEFLEX</h1>
      </Container>
    </>
  );
}

export default Header;
