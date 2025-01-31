import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL } from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return { userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};

export const userProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_SUCCESS:
            return { user: action.payload };
        case USER_PROFILE_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};
