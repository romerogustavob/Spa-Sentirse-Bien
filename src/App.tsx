import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login, { Register } from "./pages/Login";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Turn from "./pages/Turns";
import { PopUpProvider } from "./components/PopUpContext";

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
        </Routes>
      </PopUpProvider>
    </>
  );
}

export default App;
