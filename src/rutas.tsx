import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> /* Esta en Login solo para
        trabajar en el primero, pero deberia ser "home"*/
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Login />} />
        <Route path="/servicios" element={<Login />} />
        <Route path="/turnos" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
