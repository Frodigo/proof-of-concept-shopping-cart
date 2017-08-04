import {
    CART_ITEMS_LOADING,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    RECALCULATE_CART_ITEM_SUBTOTAL
} from '../actions/cart-items-actions'

import * as CartItemInterface from './../constants/interfaces/cart-item-interface';

export default function cartItemsReducer(state = {
    items: [],
    isLoading: false
}, action) {
    switch (action.type) {
        case CART_ITEMS_LOADING: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }
        case GET_CART_ITEMS: {
            return Object.assign({}, state, {
                items: action.cartItems
            })
        }
        case REMOVE_CART_ITEM: {
            let itemToRemoveIndex = state.items.indexOf(action.itemToRemove);
            return Object.assign({}, state, {
                items: [
                    ...state.items.slice(0, itemToRemoveIndex),
                    ...state.items.slice(itemToRemoveIndex + 1)
                ]
            })
        }
        case RECALCULATE_CART_ITEM_SUBTOTAL: {
            return Object.assign({}, state, {
                items: state.items.map(cartItem => {
                    if (cartItem[CartItemInterface.ID] === action.cartItem[CartItemInterface.ID]) {
                        let newQty = parseInt(action.newQty);
                        if(parseInt(newQty) === 0 || isNaN(parseInt(newQty))) {
                            return cartItem;
                        }
                        return Object.assign({}, cartItem, {
                            ...cartItem,
                            [CartItemInterface.QTY]: newQty,
                            [CartItemInterface.SUBTOTAL]: newQty * action.cartItem[CartItemInterface.PRICE]
                        })
                    } else {
                        return cartItem;
                    }
                })
            })
        }
        default: {
            return state
        }
    }
}