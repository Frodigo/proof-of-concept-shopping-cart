export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const CART_ITEMS_LOADING = 'CART_ITEMS_LOADING';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECALCULATE_CART_ITEM_SUBTOTAL = 'RECALCULATE_CART_ITEM_SUBTOTAL';

export const getCartItems = (cartItems) => ({
    type: GET_CART_ITEMS,
    cartItems
});

export const cartItemsLoading = (isLoading) => ({
    type: CART_ITEMS_LOADING,
    isLoading
});

export const removeCartItem = (itemToRemove) => ({
    type: REMOVE_CART_ITEM,
    itemToRemove
});

export const recalculateCartItemSubtotal = (cartItem, newQty) => ({
    type: RECALCULATE_CART_ITEM_SUBTOTAL,
    cartItem,
    newQty
});
