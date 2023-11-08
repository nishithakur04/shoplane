// actions/cartActions.js

export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
});

export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
});
export const emptyCart = () => ({
    type: 'EMPTY_CART'
});
export const updateCart = (item) => ({
    type: 'UPDATE_CART',
    payload: item,

})
