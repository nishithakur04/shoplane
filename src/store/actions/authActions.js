// actions/authActions.js

export const login = (flag) => ({
    type: 'Login',
    payload: flag,
});

export const logout = (flag) => ({
    type: 'Logout',
    payload: flag,
});
