import React from 'react';
import * as CartItemInterface from './../../../constants/interfaces/cart-item-interface'

export default class CartItemComponent extends React.Component{
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <tbody className="cart item">
                <tr className="item-info">
                    <td className="col item">
                        <a href={this.props.cartItem[CartItemInterface.URL]}
                           title={this.props.cartItem[CartItemInterface.NAME]} className="product-item-image">
                            <figure>
                                <img src={this.props.cartItem[CartItemInterface.IMAGE]} alt={this.props.cartItem[CartItemInterface.NAME]}/>
                            </figure>
                        </a>
                        <div className="product-item-description">
                            <strong className="product-item-name">
                                <a href={this.props.cartItem[CartItemInterface.URL]}>
                                    {this.props.cartItem[CartItemInterface.NAME]}
                                </a>
                            </strong>
                        </div>
                    </td>
    
                    <td className="col price">
                        <span className="price-excluding-tax">
                            <span className="cart-price">
                                <span className="price">
                                    {this.props.cartItem[CartItemInterface.CURRENCY]}
                                    {this.props.cartItem[CartItemInterface.PRICE]}
                                </span>
                            </span>
                        </span>
                    </td>

                    <td className="col qty">
                        <div className="field qty">
                            <label className="label" htmlFor={'cart-item-' + this.props.cartItem[CartItemInterface.ID]}>
                                <span>Qty</span>
                            </label>
                            <div className="control qty">
                                <input id={'cart-item-' + this.props.cartItem[CartItemInterface.ID]}
                                       defaultValue={this.props.cartItem[CartItemInterface.QTY]}
                                       type="number"
                                       min="1"
                                       title="Qty"
                                       className="input-text qty"
                                       onChange={(event) => this.props.onUpdateCartItem(this.props.cartItem, event.target.value)}/>
                            </div>
                        </div>
                    </td>
    
                    <td className="col subtotal">
                        <span className="price-excluding-tax">
                            <span className="cart-price">
                                <span className="price">
                                    {this.props.cartItem[CartItemInterface.CURRENCY]}
                                    {this.props.cartItem[CartItemInterface.SUBTOTAL]}
                                </span>
                            </span>
                        </span>
                    </td>
                </tr>
                <tr className="item-actions">
                    <td colSpan="100">
                        <div className="actions-toolbar">
                            <button type="button" title="Remove item" className="action primary delete" 
                                    onClick={() => this.props.onRemoveCartItem(this.props.cartItem)}>
                                <span>Remove item</span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    }
}