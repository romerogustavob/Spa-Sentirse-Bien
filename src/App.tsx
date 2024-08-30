import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login, { Register } from "./pages/Login";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/turnos" element={<Services />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
