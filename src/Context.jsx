import { createContext, useState, useEffect } from "react";
//Creamos contexto
export const Context = createContext();
//Proporcionamos contexto - proveemos mediante la funcion provider
export function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  

//Consumimos json con Fetch
  const getPizzas = async () => {
    const response = await fetch("pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };
//creamos el state carrito y setCarrito
  const [carrito, setCarrito] = useState([]);

  const addPizza = (pizza) => {
    const findID = carrito.find((item) => pizza.id === item.id);

    if (findID) {
      const newPizzas = carrito.map((item) =>
        item.id === findID.id
          ? { ...pizza, cantidad: findID.cantidad + 1 }
          : item
      );

      return setCarrito(newPizzas);
    }

    setCarrito([...carrito, { ...pizza, cantidad: 1 }]);
  };
//Creamos funcion para sumar segun la cantidad de pizzas que agreguemos al carrito
  const sumaTotalPizzasCarrito = carrito.reduce(
    (acc, item) => item.price * item.cantidad + acc,
    0
  );

  //Creamos funcion para manejar evento de clic para aumentar y decrementar 
  //donde pizza y change son los argumentos que se pasan 
  const handleClick = (pizza, change) => {

    const nuevaCantidad = pizza.cantidad + change;
    //aqui nos aseguramos que la cantidad no llegue a un numero negativo
    if (nuevaCantidad >= 0) {
      const newPizzas = carrito.map((item) =>
        item.id === pizza.id ? { ...item, cantidad: nuevaCantidad } : item
      );
      setCarrito(newPizzas);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);
//estado global que almacena las variables que entregaremos como contexto a los componentes en que queramos usarlo
  const globalState = {
    pizzas,
    carrito,
    getPizzas,
    addPizza,
    sumaTotalPizzasCarrito,
    handleClick,
  };
  
  return <Context.Provider value={globalState}>{children}</Context.Provider>;
}
