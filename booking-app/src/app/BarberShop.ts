import { Barber } from "./Barber";

export class BarberShop{
    _id:String;
    barberShopName:String;
    phoneNumber:String;
    address:String;
    barbers:Array<Barber>;
    barberShopQueue:Array<String>;
}