import { Schedule } from "../Schedule"

export class Barber {
    _id: string = "";    
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phoneNumber: string = "";
    dateCreated: Date | undefined;
    schedules: Array<Schedule> = [];
    reviews: Array<string> = [];
}