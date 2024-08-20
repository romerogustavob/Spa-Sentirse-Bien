import "./App.css";
import Navbar from "./components/Navbar";
//import { Login, Register } from "./pages/Login";
import AppRoutes from "./rutas";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
