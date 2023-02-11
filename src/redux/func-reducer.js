import {userAPI} from '../api/api';
import React from 'react';
import {MusicSvg, NewsSvg, SettingsSvg, MessengerSvg, UserSvg} from '../components/common/Svg';

const SET_TOTAL_USER_COUNT = 'func/SET_TOTAL_USER_COUNT';

const initialState = {
    num: 13903,
    func: [
        {id: 1, itemTitle: 'Developers', itemText: 'All of this humans are front-end developers', path: '/users'},
        {id: 2, img: <UserSvg width={35} height={35} fill="#2f92e1"/>, itemTitle: 'Profile', itemText: 'Create profile about yourself and put all your links', path: '/profile/19172'}
    ]
};

const funcReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                num: action.num
            }
        }
        default:
            return state
    }
};

export const setTotalUsersCount = (num) => ({type: SET_TOTAL_USER_COUNT, num});

export const getUsers = () => async (dispatch) => {
    let data = await userAPI.getUsers(null, null)
    dispatch(setTotalUsersCount(data.totalCount));
}

export default funcReducer;
