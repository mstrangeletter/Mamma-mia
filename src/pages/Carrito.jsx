import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { carrito, sumaTotalPizzasCarrito, handleClick } = useContext(Context);
  
  

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h1 className="text-4xl font-semibold mb-20">Carrito</h1>
      <div className="divide-y divide-gray-200">
        {carrito.map((pizza) => (
          <div key={pizza.id} className="flex items-center py-2">
            <div className="w-1/4">
              <Link to={`/pizza/${pizza.id}`}>
                <img
                  src={pizza.img}
                  className="w-full h-32 object-cover rounded-md"
                />
              </Link>
            </div>
            <div className="flex-1 ml-4">
              <Link to={`/pizza/${pizza.id}`}>
                <h2 className="text-lg font-semibold mb-1">{pizza.name}</h2>
              </Link>
              <p className="text-gray-600">${pizza.price}</p>
              <div className="flex items-center mt-2">
                <button 
                onClick={() => handleClick(pizza, -1)}
                className="bg-red-500 text-white rounded p-2 mr-2">
                  -
                </button>
                <p className="mx-2">{pizza.cantidad}</p>
                <button 
                onClick={() => handleClick(pizza, 1)}
                className="bg-blue-500 text-white rounded p-2">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Total: <span className="text-green-600">${sumaTotalPizzasCarrito}</span>
        </h2>
        <button className="bg-green-600 text-white p-3 rounded-md animate-pulse">
          Ir a pagar
        </button>
      </div>
    </div>
  );
}
