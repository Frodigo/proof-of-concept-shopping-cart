import {
    GET_MESSAGES,
    REQUEST_MESSAGES,
    ADD_MESSAGE,
    REMOVE_MESSAGE
} from './../actions/messages-actions';

export default function messagesReducer (state = {
    isLoading: false,
    items: []
}, action) {
    switch(action.type) {
        case GET_MESSAGES: {
            return Object.assign({}, state, {
                items: action.messages
            });
        }
        case REQUEST_MESSAGES: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }
        case ADD_MESSAGE: {
            return Object.assign({}, state, {
                items: [
                    ...state.items,
                    action.message
                ]
            });
        }
        case REMOVE_MESSAGE: {
            const messagesToRemoveIndex = state.items.indexOf(action.message);

            return Object.assign({}, state, {
                items: [
                    ...state.items.slice(0, messagesToRemoveIndex),
                    ...state.items.slice(messagesToRemoveIndex + 1)
                ]
            });
        }
        default: {
            return state;
        }
    }
}
