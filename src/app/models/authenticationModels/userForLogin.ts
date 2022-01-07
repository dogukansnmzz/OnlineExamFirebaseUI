import { Entity } from "../baseModels/entity";

export interface UserForLogin extends Entity{
    email:string;
    password:string;
}