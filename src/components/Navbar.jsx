import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

export default function Navbar() {
  const {sumaTotalPizzasCarrito } = useContext(Context);

  return (
    <nav className="bg-red-800 text-white flex justify-between items-center sticky top-0 p-2">
      <div>
        <img src="src/assets/Logo.png" alt="logo" 
        style={{
          width: "100px",
          height: "100px",
        }}
        className="mx-4" />
      </div>
      <div className="text-3xl">
        <NavLink to="/" className="font-bold tracking-wider">Pizzeria Mamma Mia!</NavLink>
      </div>
      <div className="flex items-center">
        <NavLink to="/carrito" className="text-xl px-2">
          🛒
        </NavLink>
        <span className="text-lg font-bold px-10">${sumaTotalPizzasCarrito}</span>
      </div>
    </nav>
  );
}
