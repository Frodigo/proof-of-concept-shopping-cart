import { connect } from 'react-redux'
import Cart from './../components/Cart';
import {removeMessage} from './../actions/messages-actions';
import {fetchCartItems} from './../sources/cart-items-source';
import {
    removeCartItem as removeCartItemAction,
    recalculateCartItemSubtotal as recalculateCartItemSubtotalAction
} from './../actions/cart-items-actions';
import {
    fetchAvailableCountries,
    fetchAvailableShippingMethodsForCountry
} from './../sources/cart-summary-source';
import {
    markCountryAsSelected as markCountryAsSelectedAction,
    selectShippingMethod as selectShippingMethodAction,
    collectTotals
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
        fetchAvailableShippingMethodsForCountry: (countryId) => dispatch(fetchAvailableShippingMethodsForCountry(countryId)),
        markCountryAsSelected: (selectedCountry) => dispatch(markCountryAsSelected(selectedCountry)),
        selectShippingMethod: (selectedShippingMethod) => dispatch(selectShippingMethod(selectedShippingMethod)),
        collectTotals: () => dispatch(collectTotals())
    };
};

const removeCartItem = (itemToRemove) => {
    return (dispatch) => {
        dispatch(removeCartItemAction(itemToRemove));
        dispatch(collectTotals());
    }
};

const recalculateCartItemSubtotal = (cartItem, newQty) => {
    return (dispatch) => {
        dispatch(recalculateCartItemSubtotalAction(cartItem, newQty));
        dispatch(collectTotals());
    }
};

const markCountryAsSelected = (selectedCountry) => {
    return (dispatch) => {
        dispatch(markCountryAsSelectedAction(selectedCountry));
        dispatch(fetchAvailableShippingMethodsForCountry(selectedCountry));
    }
};

const selectShippingMethod = (selectedShippingMethod) => {
  return (dispatch) => {
      dispatch(selectShippingMethodAction(selectedShippingMethod));
      dispatch(collectTotals());
  }  
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer
