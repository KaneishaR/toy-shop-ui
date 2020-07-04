export class User {

    id: number;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    dob: string;
    age: number;

    constructor (id: number, username: string, password: string, email: string, first_name: string, last_name: string, dob: string, age: number) {
        
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = dob;
        this.age = age;
    }
}