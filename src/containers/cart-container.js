import { connect } from 'react-redux'
import Cart from './../components/Cart';
import  {removeMessage} from './../actions/messages-actions';

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeMessage: (message) => dispatch(removeMessage(message))
    };
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer
