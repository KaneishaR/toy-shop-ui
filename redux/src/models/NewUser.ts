export class NewUser {

    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    dob: string;


    constructor (username: string, password: string, email: string, first_name: string, last_name: string, dob: string, ) {
        

        this.username = username;
        this.password = password;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = dob;
    }
}