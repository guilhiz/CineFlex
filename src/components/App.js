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
        <Route path="/Sessions/:movieId" element={<Sessions />} />
        <Route path="/Seats/:timeId" element={<SessionSeats />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
      </Routes>
    </Router>
  );
}

export default App;
