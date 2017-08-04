import { connect } from 'react-redux'
import Cart from './../components/Cart';
import {removeMessage} from './../actions/messages-actions';
import {fetchCartItems} from './../sources/cart-items-source';
import {
    removeCartItem as removeCartItemAction,
    recalculateCartItemSubtotal as recalculateCartItemSubtotalAction
} from './../actions/cart-items-actions';

const mapStateToProps = state => {
    return {
        messages: state.messages,
        cartItems: state.cartItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()), 
        removeMessage: (message) => dispatch(removeMessage(message)),
        removeCartItem: (itemToRemove) => dispatch(removeCartItem(itemToRemove)),
        recalculateCartItemSubtotal: (cartItem, newQty) => dispatch(recalculateCartItemSubtotal(cartItem, newQty))
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

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer
