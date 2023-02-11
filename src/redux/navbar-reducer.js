const initialState = {navData: [{id: 1, link: "/users", text: "Developers"}]};

const navbarReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default navbarReducer;
