import { createAction } from 'redux-actions';
import  { ACTION_GET_USERS_SUCCESS, ACTION_GET_USERS_REQUEST } from '../constants'

export const getUsersDataSuccess = createAction(ACTION_GET_USERS_SUCCESS);
export const getUsersDataRequest = createAction(ACTION_GET_USERS_REQUEST);
