import { combineReducers } from "redux";
import { User } from "../models/User";
import { NewUser } from "../models/NewUser";
import { registerReducer } from "./register-reducer";

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
}

export const state = combineReducers<IState>({
    register: registerReducer
})