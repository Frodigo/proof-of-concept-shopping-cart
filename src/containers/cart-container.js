import { connect } from 'react-redux'
import Cart from './../components/Cart';
import {removeMessage} from './../actions/messages-actions';
import {fetchCartItems} from './../sources/cart-items-source';
import {
    removeCartItem as removeCartItemAction,
    recalculateCartItemSubtotal as recalculateCartItemSubtotalAction
} from './../actions/cart-items-actions';
import {
    fetchAvailableCountries
} from './../sources/cart-summary-source';
import {
    markCountryAsSelected as markCountryAsSelectedAction
} from './../actions/cart-summary-actions'

const mapStateToProps = state => {
    return {
        messages: state.messages,
        cartItems: state.cartItems,
        cartSummary: state.cartSummary
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()), 
        removeMessage: (message) => dispatch(removeMessage(message)),
        removeCartItem: (itemToRemove) => dispatch(removeCartItem(itemToRemove)),
        recalculateCartItemSubtotal: (cartItem, newQty) => dispatch(recalculateCartItemSubtotal(cartItem, newQty)),
        fetchAvailableCountries: () => dispatch(fetchAvailableCountries()),
        markCountryAsSelected: (selectedCountry) => dispatch(markCountryAsSelected(selectedCountry))
    };
};

const removeCartItem = (itemToRemove) => {
    return (dispatch) => {
        dispatch(removeCartItemAction(itemToRemove));
        // TODO: add collect Total method
    }
};

const recalculateCartItemSubtotal = (cartItem, newQty) => {
    return (dispatch) => {
        dispatch(recalculateCartItemSubtotalAction(cartItem, newQty));
        // TODO: add collect Total method
    }
};

const markCountryAsSelected = (selectedCountry) => {
    return (dispatch) => {
        dispatch(markCountryAsSelectedAction(selectedCountry));
        // TODO: add function for fetch shipping methods
    }
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer
