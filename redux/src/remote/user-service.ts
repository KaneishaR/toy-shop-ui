  
import { User } from "../models/User";
import { NewUser } from "../models/NewUser";
import { toyStoreClient } from "./toystore-client";
import { Principal } from "../models/Principal";

export async function register(NewUser: NewUser){
	let response = await toyStoreClient.post('/users', NewUser);
	console.log(response);
	return await response.data;
}

export async function login(username: string, password: string){
	let response = await toyStoreClient.post('/auth',{username, password});
	console.log(response)
	return await response.data;
}

export async function logout(){
	let response = await toyStoreClient.get('/auth');
	return await response;
}