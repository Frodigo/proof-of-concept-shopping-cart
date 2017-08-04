import React from 'react';
import Messages from './Messages';

class CartComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className="page-title-wrapper">
                    <h1 className="page-title">
                        <span className="base">Shopping Cart</span>
                    </h1>
                </div>

                <Messages messages={this.props.messages} removeMessage={(message) => this.props.removeMessage(message)}></Messages>
            </div>
        )
    }
}

export default CartComponent;
