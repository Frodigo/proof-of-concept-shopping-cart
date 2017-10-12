import React from 'react';
import * as CartItemInterface from './../../../constants/interfaces/cart-item-interface'

export default class CartItemComponent extends React.Component{
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <tbody>
                <tr>
                    <td>
                        <a href={this.props.cartItem[CartItemInterface.URL]}
                           title={this.props.cartItem[CartItemInterface.NAME]} className="product-item-image pull-left">
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
    
                    <td>
                        <span className="price">
                            {this.props.cartItem[CartItemInterface.CURRENCY]}
                            {this.props.cartItem[CartItemInterface.PRICE]}
                        </span>
                    </td>

                    <td>
                        <div className="field qty">
                            <input id={'cart-item-' + this.props.cartItem[CartItemInterface.ID]}
                                   defaultValue={this.props.cartItem[CartItemInterface.QTY]}
                                   type="number"
                                   min="1"
                                   title="Qty"
                                   className="form-control qty"
                                   onChange={(event) => this.props.onUpdateCartItem(this.props.cartItem, event.target.value)}/>
                        </div>
                    </td>
    
                    <td>
                        <span className="price">
                            {this.props.cartItem[CartItemInterface.CURRENCY]}
                            {this.props.cartItem[CartItemInterface.SUBTOTAL]}
                        </span>
                    </td>
                    <td>
                        <div className="actions-toolbar">
                            <button type="button" className="btn btn-danger"
                                    onClick={() => this.props.onRemoveCartItem(this.props.cartItem)}>
                                <span className="glyphicon glyphicon-trash">
                                    <span className="sr-only">Remove item</span>
                                </span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    }
}