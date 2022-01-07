import { Entity } from "../baseModels/entity";

export interface UserForRegister extends Entity{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}