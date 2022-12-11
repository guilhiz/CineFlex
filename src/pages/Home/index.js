import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Loader } from "../../styles/animations";
import Movie from "../../components/Movie";
import api from "../../services/api";

function Home() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    api
      .get("/movies")
      .then((response) => setPost(response.data))
      .catch((erro) => console.log(erro));
  }, []);

  if (post === null) {
    return <Loader />;
  }

  return (
    <Container>
      <h2>Selecione o filme</h2>
      {post.map((p) => (
        <Movie key={p.id} img={p.posterURL} title={p.title} id={p.id} />
      ))}
    </Container>
  );
}

export default Home;
