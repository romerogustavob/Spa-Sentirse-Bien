import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/inicio" element={<Login />} />
        <Route path="/servicios" element={<Login />} />
        <Route path="/turnos" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
