
import {ACTION_GET_USERS_SUCCESS} from '../constants';

const initialState = {
    users: null
};

function users(state = initialState, action) {
    switch (action.type) {
        case ACTION_GET_USERS_SUCCESS:
            state = action.response.data.results;
            return state;
        default:
            return state;
    }
}

export default users;
