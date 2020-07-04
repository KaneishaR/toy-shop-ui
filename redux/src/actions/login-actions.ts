import React from "react"
import { login } from "../remote/user-service"
import { Dispatch } from "redux";

export const loginActionTypes = {
    SUCCESSFUL_LOGIN: 'SUCCESSFUL_LOGIN',
    BAD_REQUEST: 'LOGIN_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'LOGIN_INTERNAL_SERVER_ERROR'
}

export const loginAction = (username: string, password: string) => async (dispatch: Dispatch) => {
    try{
        let user = await login(username, password);

        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: user
        });
    }catch(e){
        let status = e.response.data.statusCode;
        if(status === 400){
            dispatch({
                type:loginActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        }else{
			dispatch({
				type: loginActionTypes.INTERNAL_SERVER_ERROR,
				payload: e.response.data.message || 'Uh oh! We could not reach the server!'
			});
		}
    }
}