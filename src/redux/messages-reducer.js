const ADD_MESSAGE = 'messages/ADD_MESSAGE'

let initialState = {
    newMessageBody: "",
    messages: [],
 
};

const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 228, message: body}]
            }
        }
        default:
            return state;
    }
};

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default messagesReducer;
