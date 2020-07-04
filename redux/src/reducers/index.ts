import { combineReducers } from "redux";
import { User } from "../models/User";
import { NewUser } from "../models/NewUser";
import { registerReducer } from "./register-reducer";
import { loginReducer } from "./login-reducer";

export interface IRegisterState {
    newUser: NewUser;
    errorMessage: string;
}

export interface ILoginState {
    authUser: User;
    errorMessage: string;
}

export interface IState {
    register: IRegisterState;
    login: ILoginState;
}

export const state = combineReducers<IState>({
    register: registerReducer,
    login: loginReducer
})