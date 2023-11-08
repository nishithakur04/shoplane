// reducers/cartReducer.js

const initialState = {
    items: [],
};

const favCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAV_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_FAV_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case 'EMPTY_FAV_CART':
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
};

export default favCartReducer;
