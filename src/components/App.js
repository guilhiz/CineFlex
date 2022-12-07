import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import OrderConfirmed from "../pages/OrderConfirmed";
import Seats from "../pages/Seats";
import Sessions from "../pages/Sessions";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sessions" element={<Sessions />} />
        <Route path="/Seats" element={<Seats />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
      </Routes>
    </Router>
  );
}

export default App;
