import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pizza from "../assets/pizza.png";

export default function Home() {
  const { pizzas, addPizza } = useContext(Context);
  const navigate = useNavigate();

  const handleClickAdd = ({id, price, img, name}) => {
    addPizza({id, price, img, name});
    navigate("/carrito");
  }
  return (
    <>
      <header className="bg-yellow-500 text-white p-80 flex ">
        <div className="w-30 h-30 object-right-bottom">
          <img src="src/assets/Logo.png" alt="logo" />
        </div>
      </header>

      <main className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 px-10">

        {pizzas.map((pizza) => (
          <div className="card bg-white shadow-md rounded-md overflow-hidden">

            <div className="h-56 bg-gray-200 bg-center bg-cover" style={{ backgroundImage: `url(${pizza.img})` }}>

            </div>

            <div className="p-4">

              <h3 className="text-lg font-bold">{pizza.name}

              </h3>

              <p className="text-sm font-medium text-gray-500 mt-2 mb-1">Ingredientes:</p>
              <ul className="mb-2">

              {pizza.ingredients.map((ingrediente, index) => (
                <li className="text-gray-700 flex items-center content-center justify-center" key={ingrediente.id}>
                  <img src={Pizza} alt="logo"
                    style={{
                      width: "10px",
                      height: "10px",
                      marginRight: "10px",
                    }}
                  />
                  {ingrediente}
                </li>
              ))}
              </ul>
              
              <span className="text-lg font-medium ">${pizza.price}</span>
              <div className="mt-4">
                <Link to={`/pizza/${pizza.id}`}>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300">Ver más</button>
                </Link>
                <button 
                onClick={() => handleClickAdd(pizza)}
                className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300">Añadir</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
