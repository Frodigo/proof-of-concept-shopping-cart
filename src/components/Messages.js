import React from 'react';

class MessagesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let componentClass = this.props.isLoading ? 'page messages component is-loading': 'page messages component';
        return (
            <div className={componentClass}>
                <div className="messages">
                    {this.props.messages.map((message, index) => {
                        return <div key={index} className={'message ' + message.type}>
                            {message.text}
                            <button className="action remove" onClick={() => this.props.removeMessage(message)}>x</button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}


export default MessagesComponent;