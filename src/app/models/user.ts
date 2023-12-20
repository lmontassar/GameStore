export class User {
    id!:number;
    firstname!:string;
    lastname!:string;
    email!:string;
    password!:string;
    admin:boolean = false;
    cart ?: [];
    games ?: [];    
}