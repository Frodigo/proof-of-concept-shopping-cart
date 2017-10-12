import React from 'react';
import CartItem from './Items/Cart-item';
import {ID as CART_ITEM_ID_FIELD_KEY} from './../../constants/interfaces/cart-item-interface'

export default class CartItemsComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        let componentClass = this.props.isLoading ? 'form form-cart component is-loading': 'form form-cart component';
        return (
            <form className={componentClass}>
                <div className="cart table-wrapper">
                    <table id="shopping-cart-table" className="table">
                        <thead>
                            <tr>
                                <th><span>Item</span></th>
                                <th><span>Price</span></th>
                                <th><span>Qty</span></th>
                                <th><span>Subtotal</span></th>
                            </tr>
                        </thead>
                        {this.props.items.map(cartItem => {
                            return <CartItem key={cartItem[CART_ITEM_ID_FIELD_KEY]} cartItem={cartItem} 
                                             onRemoveCartItem={this.props.onRemoveCartItem}
                                             onUpdateCartItem={this.props.onUpdateCartItem}/>
                        })}
                    </table>
                </div>
            </form>
        )
    }
}
