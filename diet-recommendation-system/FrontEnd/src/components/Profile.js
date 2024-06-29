import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/actions/userActions';

const Profile = ({ history }) => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userProfile);
    const { user, error } = userProfile;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user.name) {
                dispatch(getUserProfile());
            }
        }
    }, [dispatch, history, userInfo, user]);

    return (
        <div>
            <h1>Profile</h1>
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Weight: {user.weight}</p>
                    <p>Height: {user.height}</p>
                    <p>Dietary Preferences: {user.dietaryPreferences}</p>
                    <p>Allergies: {user.allergies.join(', ')}</p>
                    <p>Health Goals: {user.healthGoals}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
