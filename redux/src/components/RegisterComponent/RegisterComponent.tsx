import React, {useState} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Paper, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import {NewUser} from '../../models/NewUser';
import { User } from '../../models/User';


export interface IRegisterProps{
	authUser: User | undefined;
	errorMessage: string;
	registerAction: (NewUser: NewUser) => void;
}

const useStyles = makeStyles({
	registerContainer:{
		display: "flex", 
		justifyContent: "center",
		margin: 20, 
		marginTop: 40, 
		padding: "5%"
	},
	registerForm: {
		width: "50%"
	}
});

const RegisterComponent = (props: IRegisterProps) =>{
	const classes = useStyles();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');

	let updateFormField = (e:any) =>{
		switch (e.target.id){
			case 'firstName': 
				setFirstName(e.target.value);
				break;
			case 'lastName':
				setLastName(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
            case 'dob':
                setDob(e.target.value); 
                break;   
            default:
				console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`);
		}		
	}

	let signUp = async () => {
		props.registerAction(new NewUser(username, password, email, firstName, lastName, dob));
	}
	return (
        props.authUser ? <Redirect to="/home" /> :

        <Paper className={classes.registerContainer}>
            <form className={classes.registerForm}>
                <Typography align="center" variant="h4">Register for the Toy Shop</Typography>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={firstName} 
                        id="firstName" type="text" 
                        placeholder="Enter your first name" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={lastName} 
                        id="lastName" type="text" 
                        placeholder="Enter your last name" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={email} 
                        id="email" type="text" 
                        placeholder="Enter your email address" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={username} 
                        id="username" type="text" 
                        placeholder="Enter your username" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input 
                        onChange={updateFormField}
                        value={password}
                        id="password" type="password"
                        placeholder="Enter your password"/>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="dob">Date of Birth</InputLabel>
                    <TextField
                    id="dob"
                    type="date"
                    defaultValue="2000-01-01"
                    InputLabelProps={{shrink: true}}/>
                </FormControl>
                <br/><br/>
                <Button 
                    onClick={signUp} 
                    variant="contained" 
                    color="secondary" 
                    size="medium">Register
                </Button>
                <br/><br/>
                {
                    props.errorMessage 
                        ? 
                    <Alert severity="error">{props.errorMessage}</Alert>
                        :
                    <></>
                }
            </form>
        </Paper>
    );
}

export default RegisterComponent;