// reducers/cartReducer.js

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'EMPTY_CART':
      return {
        ...state,
        items: []
      };
    case 'UPDATE_CART':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item = action.payload
          }
          return item;
        })
      }
    default:
      return state;
  }
};

export default cartReducer;
