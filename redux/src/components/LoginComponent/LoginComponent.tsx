import React, { useState }from 'react';
import { User } from "../../models/User";
import { NewUser } from "../../models/NewUser";
import { makeStyles, Paper, Typography, FormControl, Input, Button, InputLabel  } from "@material-ui/core";
import { Redirect } from "react-router";

interface ILoginProps {
    authUser: User | undefined;
    errorMessage: string;
    loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles({

})

function LoginComponent(props: ILoginProps){
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let updateForm = (e:any) => {
        switch (e.currentTaget.id){
            case 'username':
                setUsername(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
                console.warn(`Error binding; element with id: ${e.currentTaget.id}`)
        }
    }

    let login = async () => {
        props.loginAction(username, password);
    }

    let errorHandler = async (error: string) => {
        console.error(error);
    }

    return (
        props.authUser ?
        <Redirect to="/home"/> :
        <>
           <Paper>
                <form>
                    <Typography align="center" variant="h4">Login to Meme Store!</Typography>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input 
                            onChange={updateForm} 
                            value={username} 
                            id="username" type="text" 
                            placeholder="Enter your username" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input 
                            onChange={updateForm}
                            value={password}
                            id="password" type="password"
                            placeholder="Enter your password"/>
                    </FormControl>
                    <br/><br/>
                    <Button onClick={login} variant="contained" color="secondary" size="medium">Login</Button> 
                </form>
            </Paper>
        </>
        

    )
}

export default LoginComponent;