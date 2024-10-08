export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

// Using match pattern to manage the state based on actions
const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    // Increase quantity if product is already in the cart
    if (productInCartIndex >= 0) {
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;

      updateLocalStorage(newState);
      return newState;
    }

    // Add product to the cart
    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTIONS.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTIONS.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
