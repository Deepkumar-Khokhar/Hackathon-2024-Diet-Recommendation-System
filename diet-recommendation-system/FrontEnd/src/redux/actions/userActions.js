import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

export const register = (name, email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/register', { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get('/api/profile', config);
        dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_PROFILE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};
