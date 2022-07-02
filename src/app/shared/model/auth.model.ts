import { Guid } from "guid-typescript";

export interface AuthCredential{
    username:string;
    password:string;
}

export interface UserToken{
    token:string;
    userName:string;
    userId:string;
    personId:string;
    expiration:string;
}