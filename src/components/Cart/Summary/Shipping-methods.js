import React from 'react';
import * as ShippingMethodInterface from './../../../constants/interfaces/shipping-method';

export default class ShippingMethodsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isVisible) {
            return (
                <div className="component field">
                    <label className="label">Shipping method</label>
                    <ul className="list-unstyled">
                        {this.props.shippingMethods.map(shippingMethod => {
                            return <li className="control shipping-method-control" key={shippingMethod[ShippingMethodInterface.ID]}>
                                <input type="radio"
                                       id={'shipping-method-' + shippingMethod[ShippingMethodInterface.ID]}
                                       value={shippingMethod[ShippingMethodInterface.ID]}
                                       checked={shippingMethod[ShippingMethodInterface.VALUE === this.props.selectedShippingMethod]}
                                       onClick={(event) => this.props.onSelectShippingMethod(event.target.value)}
                                       name="shipping-method"/>
                                <label htmlFor={'shipping-method-' + shippingMethod[ShippingMethodInterface.ID]}>
                                    {shippingMethod[ShippingMethodInterface.LABEL]}
                                    <small>
                                        ({shippingMethod[ShippingMethodInterface.CURRENCY]}
                                        {shippingMethod[ShippingMethodInterface.VALUE]})
                                    </small>
                                </label>
                            </li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="component field"/>
            );
        }

    }
}