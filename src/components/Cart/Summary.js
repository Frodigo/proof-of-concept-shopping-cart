import React from 'react';
import AvailableCountries from './Summary/Available-countries';
import ShippingMethod from './Summary/Shipping-methods';
import CartTotals from './Summary/Cart-totals';

export default class CartSummaryComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        let componentClass = this.props.isLoading ? 'cart-summary component is-loading': 'cart-summary component';
        return (
            <aside className={componentClass}>
                <h3 className="summary title">Summary</h3>

                <h4>Estimate shipping and Tax</h4>

                <form>
                    <fieldset className="fieldset">
                        <AvailableCountries countries={this.props.countries}
                                            selectedCountry={this.props.selectedCountry} 
                                            onChange={this.props.onMarkSelectedCountry}/>
                        <ShippingMethod shippingMethods={this.props.shippingMethods}
                                        selectedShippingMethod={this.props.selectedShippingMethod}
                                        onSelectShippingMethod={this.props.onSelectShippingMethod}
                                        isVisible={this.props.selectedCountry}/>
                    </fieldset>
                </form>
                <CartTotals subtotal={this.props.totals.subtotal}
                            shipping={this.props.totals.shipping}
                            orderTotal={this.props.totals.orderTotal}
                            currency="$"/>
            </aside>
        )
    }
}