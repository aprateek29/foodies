import React from "react";

const CartStateContext = React.createContext();
const CartDispatchContext = React.createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exist = state.find((x) => x.id === action.item.id);
      if (exist) {
        state = state.map((x) =>
          x.id === action.item.id ? { ...exist, qty: exist.qty + 1 } : x
        );
        return state;
      } else {
        return [...state, { ...action.item, qty: 1 }];
      }
    }
    case "REMOVE": {
      const exist = state.find((x) => x.id === action.id);
      let newState;
      if (!exist) {
        return state;
      }
      if (exist.qty === 1) {
        newState = state.filter((x) => x.id !== action.id);
      } else {
        newState = state.map((x) =>
          x.id === action.id ? { ...exist, qty: exist.qty - 1 } : x
        );
      }
      return newState;
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
export const useCart = () => React.useContext(CartStateContext);
export const useDispatchCart = () => React.useContext(CartDispatchContext);
