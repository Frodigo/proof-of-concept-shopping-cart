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
                        return <div key={index} className={'alert alert-' + message.type}>
                            {message.text}
                            <button type="button"
                                    className="close"
                                    data-dismiss="alert"
                                    aria-label="Close"
                                    onClick={() => this.props.removeMessage(message)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}


export default MessagesComponent;