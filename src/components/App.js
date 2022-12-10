import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import OrderConfirmed from "../pages/OrderConfirmed";
import SessionSeats from "../pages/SessionSeats";
import Sessions from "../pages/Sessions";
import GlobalStyle from "../GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:movieId" element={<Sessions />} />
        <Route path="/assentos/:timeId" element={<SessionSeats />} />{" "}
        <Route path="/sucesso" element={<OrderConfirmed />} />
      </Routes>
    </Router>
  );
}

export default App;
