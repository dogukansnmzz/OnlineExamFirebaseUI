import { Entity } from "../baseModels/entity";

export interface ForwardedReplie extends Entity{
    id:string;
    
    questionId:string;
    
    userId:string;
    email:string;

    answer:string;
}