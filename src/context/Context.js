import React, { createContext, useContext, useReducer } from "react";
import data from "../data";
import { cartReducer, productReducer } from "./Reducers";

export const Cart = createContext();

function Context({ children }) {
  const products = data;
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    category: "ALL",
    size: "ANY",
    searchTerm: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
