import {userAPI} from '../api/api';
import React from 'react';
import {MusicSvg, NewsSvg, SettingsSvg, MessengerSvg, UserSvg} from '../components/common/Svg';

const SET_TOTAL_USER_COUNT = 'func/SET_TOTAL_USER_COUNT';

const initialState = {
    num: 13903,
    func: [
        {id: 1, itemTitle: 'Друзья', itemText: 'Ровно столько пользователей присоединились к нашей социальной сети. Кликай и заводи новые занкомства.', path: '/users'},
        {id: 2, img: <UserSvg width={35} height={35} fill="#2f92e1"/>, itemTitle: 'Профиль', itemText: 'Профиль', path: '/profile'},
        {id: 3, img: <MessengerSvg width={35} height={35} fill="#2f92e1"/>, itemTitle: 'Мессенджер', itemText: 'Мессенджер', path: '/messages'},
        {id: 4, img: <NewsSvg width={35} height={35} fill="#2f92e1"/>, itemTitle: 'Новости', itemText: 'Ровно столько пользователей присоединились к нашей социальной сети. Кликай и заводи новые занкомства.   ', path: '/news'},
        {id: 5, img: <MusicSvg width={35} height={35} fill="#2f92e1"/>, itemTitle: 'Музыка', itemText: 'Музыка', path: '/music'},
        {id: 6, img: <SettingsSvg width={35} height={35} fill="#2f92e1"/>, itemTitle: 'Настройки', itemText: 'Настройки', path: '/settings'}
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
