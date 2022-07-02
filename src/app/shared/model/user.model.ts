import { Guid } from "guid-typescript"
import { lib_user_level } from "./library.model";

export interface UserList{
    userId?:Guid;
    userName?:string;
    user_level?:string;
}

export interface UserDetails{
    userId?:Guid;
    userName?:string;
    user_level?:number;
    salt?:string;
    hash_code?:string;
    deleted_by?:string;
    deleted_date?:string;
    is_deleted?:string;
}