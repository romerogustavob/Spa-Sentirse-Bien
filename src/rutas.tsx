import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Login";
import Gallery from "./pages/Gallery";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> /* Esta en Login solo para
        trabajar en el primero, pero deberia ser "Home"*/
        <Route path="/home" element={<Home />} /> /* Temporal para que no llore
        el visual"*/
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
