import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer  ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());
    console.log();
    try {
        const response = await axios.post('users/signup', credentials);
        dispatch(authActions.registerSuccess(response.data));
        console.log(response);
    } catch (error) {
        dispatch(authActions.registerError(error));
        console.log(error);
    }
};
const logIn = credentials => dispatch => {};
const logOut = () => dispatch => {};
const getCurrent = () => (dispatch, getState) => {};

export default { register, logIn, logOut, getCurrent };
