import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../../components/Movie";
import Header from "../../components/Header";
import GlobalStyle from "../../GlobalStyle";
import { Container, Loader } from "./styles";

function Home() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then((response) => setPost(response.data))
      .catch((erro) => console.log(erro));
  });
  if (post === null) {
    return <Loader />;
  }

  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <h2>Selecione o filme</h2>
      {post.map((p) => (
        <Movie key={p.id} img={p.posterURL} title={p.title} />
      ))}
    </Container>
  );
}

export default Home;
