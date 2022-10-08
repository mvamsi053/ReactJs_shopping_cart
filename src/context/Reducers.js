export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "CHANGE_CART_QUANT":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id == action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CAT":
      return { ...state, category: action.payload };
    case "FILTER_BY_SIZE":
      return { ...state, size: action.payload };
    default:
      return state;
  }
};
