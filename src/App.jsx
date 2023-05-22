import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import DetallePizza from "./pages/DetallePizza";
import { Provider } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<DetallePizza />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
