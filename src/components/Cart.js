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
        let component = null;
        if (this.props.cartItems.items.length) {
            component = <div className="row">
                <div className="col-sm-8">
                    <CartItems isLoading={this.props.cartItems.isLoading}
                               items={this.props.cartItems.items}
                               onRemoveCartItem={this.props.removeCartItem}
                               onUpdateCartItem={this.props.recalculateCartItemSubtotal}/>
                </div>
                <div className="col-sm-4">
                    <CartSummary isLoading={this.props.cartSummary.isLoading}
                                 countries={this.props.cartSummary.availableCountries}
                                 selectedCountry={this.props.cartSummary.userData.selectedCountry}
                                 onMarkSelectedCountry={this.props.markCountryAsSelected}
                                 shippingMethods={this.props.cartSummary.shippingMethods}
                                 selectedShippingMethod={this.props.cartSummary.userData.selectedShippingMethod}
                                 onSelectShippingMethod={this.props.selectShippingMethod}
                                 totals={this.props.cartSummary.totals} />
                </div>
            </div>
        } else {
            component = <p>You have no items in your shopping cart.</p>
        }
        return (
            <div>
                <h1>Shopping Cart</h1>

                <Messages messages={this.props.messages.items}
                          isLoading={this.props.messages.isLoading}
                          removeMessage={(message) => this.props.removeMessage(message)}>
                </Messages>

                {component}
            </div>
        )
    }
}

export default CartComponent;
