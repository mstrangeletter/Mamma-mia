import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import Pizza from "../assets/pizza.png";

export default function DetallePizza() {
  const { pizzas, addPizza } = useContext(Context);
  const params = useParams();

  const navigate = useNavigate();
  const handleClickAdd = ({ id, price, img, name }) => {
    addPizza({ id, price, img, name });
    navigate("/carrito");
  }

  const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);
  const pizza = getPizzaById(params.id);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex flex-col md:flex-row w-4/5 md:w-3/5 bg-white rounded-md shadow-md overflow-hidden">
        <div className="bg-gray-200 bg-center bg-cover md:w-3/5" style={{ backgroundImage: `url(${pizza.img})`, height: "500px" }}></div>
        <div className="p-6 md:w-2/5 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-2">{pizza.name}</h1>
          <p className="text-gray-700 text-base">{pizza.desc}</p>
          <div className="my-4">
            <p className="text-lg font-medium mb-2 text-center">Ingredientes:</p>
            <ul>
              {pizza.ingredients.map((ingrediente, index) => (
                <li className="text-gray-700 flex items-center justify-center" key={ingrediente.id}>
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
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4">
            <span className="font-bold text-xl">${pizza.price}</span>
            <button
              onClick={() => handleClickAdd(pizza)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4 md:mt-0 md:ml-4">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
