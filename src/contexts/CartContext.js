import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  return <CartContext.Provider></CartContext.Provider>;
};

export default CartProvider;
