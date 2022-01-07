import { Entity } from "../baseModels/entity";

export interface Post extends Entity{
    id?:string;
    title:string;
    description:string;
}