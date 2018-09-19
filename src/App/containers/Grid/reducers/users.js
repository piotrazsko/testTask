import {ACTION_GET_USERS_SUCCESS, ACTION_SORT_USERS} from '../constants';

const initialState = [];

function users(state = initialState, action) {
    switch (action.type) {
        case ACTION_GET_USERS_SUCCESS:
            state = action.response.data.results;
            state = state.map(item => {
                return {
                    photo: item.picture.medium.split('https://randomuser.me/')[1],
                    first_name: item.name.first,
                    last_name: item.name.last,
                    gender: item.gender
                }
            })
            state.sort(function(a, b) {
                if (a.first_name > b.first_name) {
                    return 1;
                }
                if (a.first_name < b.first_name) {
                    return -1;
                }
                return 0;
            })
            return state;
        case ACTION_SORT_USERS:
            const key = action.payload
            state.sort(function(a, b) {
                if (a[key] > b[key]) {
                    return 1;
                }
                if (a[key] < b[key]) {
                    return -1;
                }
                return 0;
            })
            return state;
        default:
            return state;
    }
}

export default users;
