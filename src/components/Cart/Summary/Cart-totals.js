import React from 'react';

export default class CartTotalsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="cart-totals" className="cart-totals">
                <div className="table-wrapper">
                    <table className="data table totals">
                        <tbody>
                            <tr className="totals sub">
                                <th className="mark">Subtotal</th>
                                <td className="amount">
                                    {this.props.currency}
                                    {this.props.subtotal}
                                </td>
                            </tr>
                            <tr className="totals shipping">
                                <th className="mark">Shipping</th>
                                <td className="amount">
                                    {this.props.currency}
                                    {this.props.shipping}
                                </td>
                            </tr>
                            <tr className="totals grand">
                                <th className="mark">Order Total</th>
                                <td className="amount">
                                    {this.props.currency}
                                    {this.props.orderTotal}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}