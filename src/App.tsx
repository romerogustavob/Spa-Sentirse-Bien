import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login, { Register } from "./pages/Login";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Turn from "./pages/Turns";
import Perfil from "./pages/Perfil";
import { PopUpProvider } from "./components/PopUpContext";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <PopUpProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/turnos" element={<Turn />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </PopUpProvider>
    </>
  );
}

export default App;
