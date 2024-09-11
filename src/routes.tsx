import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Turn from "./pages/Turns";
import Perfil from "./pages/Perfil";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/turnos" element={<Turn />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
