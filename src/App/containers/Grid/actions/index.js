import { createAction } from 'redux-actions';
import  {  ACTION_GET_USERS_REQUEST, ACTION_SORT_USERS } from '../constants'

export const getUsersDataRequest = createAction(ACTION_GET_USERS_REQUEST);
export const sortUsers = createAction(ACTION_SORT_USERS);
