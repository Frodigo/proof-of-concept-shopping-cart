export const GET_MESSAGES = 'GET_MESSAGES';
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const getMessages = (messages) => ({
    type: GET_MESSAGES,
    messages
});

export const requestMessages = (isLoading) => ({
   type: REQUEST_MESSAGES,
    isLoading
});

export const addMessage = (message) => ({
   type: ADD_MESSAGE,
    message
});

export const removeMessage = (message) => ({
   type: REMOVE_MESSAGE 
});
