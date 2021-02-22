
import { Review } from "./review";
import { Schedule } from "./schedule"

export class Barber{
    _id:String;
    
    firstName:String;
    lastName:String;
    phoneNumber:string;



    schedules:Array<Schedule>;
    reviews:Array<Review>;
}