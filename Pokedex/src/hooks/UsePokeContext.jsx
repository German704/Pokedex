import { useContext } from "react";
import { PokeContext } from "../context/GetPokemons";

const UsePokeContext = () => {
  return useContext(PokeContext);
};

export default UsePokeContext
