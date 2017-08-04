import React from 'react';
import Messages from './Messages';
import CartItems from './Cart/Items';
import CartSummary from './Cart/Summary';

class CartComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchCartItems();
        this.props.fetchAvailableCountries();
    }

    render () {
        return (
            <div>
                <div className="page-title-wrapper">
                    <h1 className="page-title">
                        <span className="base">Shopping Cart</span>
                    </h1>
                </div>

                <Messages messages={this.props.messages.items}
                          isLoading={this.props.messages.isLoading}
                          removeMessage={(message) => this.props.removeMessage(message)}>
                </Messages>

                <div className="columns">
                    <div className="column main">
                        <div className="cart-container">
                            <CartItems isLoading={this.props.cartItems.isLoading} items={this.props.cartItems.items}
                                       onRemoveCartItem={this.props.removeCartItem}
                                       onUpdateCartItem={this.props.recalculateCartItemSubtotal}/>
                            <CartSummary isLoading={this.props.cartSummary.isLoading}
                                         countries={this.props.cartSummary.availableCountries} 
                                         selectedCountry={this.props.cartSummary.userData.selectedCountry}
                                         onMarkSelectedCountry={this.props.markCountryAsSelected}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartComponent;
