import {
    getCartItems,
    cartItemsLoading
} from './../actions/cart-items-actions'
import {collectTotals} from './../actions/cart-summary-actions';

require('./data/cart-items.json');

const CART_ITEMS_URL = 'http://localhost:8080/data/cart-items.json';

export function fetchCartItems() {
    return (dispatch) => {
        dispatch(cartItemsLoading(true));
        fetch(CART_ITEMS_URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(cartItemsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(getCartItems(items));
                dispatch(collectTotals());
            })
            .catch((error) => console.error(error));
    };
}
