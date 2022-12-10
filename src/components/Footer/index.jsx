import React from "react";
import { Container, ContainerImage } from "./styles";

function Footer(props) {
  const { posterUrl, title, children } = props;
  return (
    <Container data-test="footer">
      <ContainerImage>
        <img src={posterUrl} alt="" />
      </ContainerImage>
      <div>
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </Container>
  );
}

export default Footer;
