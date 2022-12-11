import React, { useState, useEffect } from "react";
import arrow from "../../assets/arrow-left1.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Container show={show}>
        {location.pathname !== "/" && (
          <img data-test="go-home-header-btn" src={arrow} alt="Previous Page" onClick={() => navigate(-1)} />
        )}

        <h1 onClick={() => navigate("/")}>CINEFLEX</h1>
      </Container>
    </>
  );
}

export default Header;
