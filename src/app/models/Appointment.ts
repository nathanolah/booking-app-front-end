import { Customer } from './Customer'
import { Barber } from './Barber'
export interface Appointment {
    _id: string;
    startDate: Date;
    endDate: Date;
    custID: Customer;
    barberID: Barber;
    isActive: boolean;
}