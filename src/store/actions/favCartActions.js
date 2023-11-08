// actions/favCartActions.js

export const addToFavCart = (item) => ({
    type: 'ADD_TO_FAV_CART',
    payload: item,
});

export const removeFromFavCart = (item) => ({
    type: 'REMOVE_FROM_FAV_CART',
    payload: item,
});
export const emptyFavCart = () => ({
    type: 'EMPTY_FAV_CART'
});
