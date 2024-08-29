import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/turnos" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
