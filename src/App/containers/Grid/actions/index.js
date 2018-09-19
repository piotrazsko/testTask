import { createAction } from 'redux-actions';
import  {ACTION_GET_USER_SUCCESS, ACTION_GET_USER_RESPONSE} from '../constants'

export const getUsersDateSuccess = createAction(ACTION_GET_USER_SUCCESS);
export const getUsersDateResponce = createAction(ACTION_GET_USER_RESPONSE);
