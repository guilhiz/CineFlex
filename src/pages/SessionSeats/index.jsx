import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Container, Loader } from './styles';

function Seats() {
const [sessionSeats, setSessionSeats] = useState(null)
let {timeId} = useParams()

useEffect(() => {
  api.get(`/showtimes/${timeId}/seats`)
  .then(response => setSessionSeats(response))
  .catch(error => console.log(error))
}, [])

if (sessionSeats === null) {
  return <Loader />
}

  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  );
}

export default Seats;
