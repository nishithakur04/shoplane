const initialState = {
    isLogin: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Login':
            return {
                ...state,
                isLogin: true,
            };
        case 'Logout':
            return {
                ...state,
                isLogin: false,
            };
        default:
            return state;
    }
};

export default authReducer;