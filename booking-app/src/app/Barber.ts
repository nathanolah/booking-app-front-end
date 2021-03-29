
import { Review } from "./Review";
import { Schedule } from "./Schedule"

export class Barber{
    _id:String;
    firstName:String;
    lastName:String;
    email:String;
    dateCreated:Date;
    phoneNumber:string;
    password:String;
    isManager:boolean;
    schedules:Array<Schedule>;
    reviews:Array<Review>;
    
    
  
   



    
}