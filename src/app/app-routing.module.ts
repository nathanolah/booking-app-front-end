import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import { BarberListComponent } from './barber-list/barber-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { BarberProfileComponent } from './barber-profile/barber-profile.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AboutComponent } from './about/about.component';
import {GuardAuthService} from './guard-auth.service';
import { LoginBarberComponent } from './login-barber/login-barber.component';
import { AddBarberComponent } from './add-barber/add-barber.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
import { AppointmentByBarberComponent } from './appointment-by-barber/appointment-by-barber.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';

import { AppointmentsForDayComponent } from './appointments-for-day/appointments-for-day.component';
import {CustomerAppointmentsComponent} from './customer-appointments/customer-appointments.component';
import {AppointmentComponent} from './appointment/appointment.component';

import { AdminComponent } from './admin/admin.component';

import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { GuardAdminService } from './guard-admin.service';
import { GuardManagerService } from './guard-manager.service';

import { NewShopComponent } from './new-shop/new-shop.component';
import { RemoveBarberShopComponent } from './remove-barber-shop/remove-barber-shop.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "about", component: AboutComponent},
  {path: "barlist", component: BarberListComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent },
  {path: "login-barber",component:LoginBarberComponent},
  { path: 'customer/:id', component: CustomersComponent, canActivate:[GuardAuthService] },
  {path: "register", component: RegisterComponent },
  { path: 'customers-list', component: CustomersListComponent},
  { path: 'appointment/:id', component: AppointmentComponent},
  {path: "shopProfile/:id", component: ShopProfileComponent},
  {path: "newReview/:id", component:NewReviewComponent, canActivate:[GuardAuthService]},
  {path: "reviews-list", component:ReviewListComponent, canActivate:[GuardAdminService]},
  {path: "review/:id", component:ReviewComponent, canActivate:[GuardAuthService]},
  { path: 'appointment-list', component: AppointmentListComponent},

  
  // From SMKMS4 vvv 
  
  {path: "barProf/:shop/:id", component:BarberProfileComponent},
  {path: "appointment-form/:id", component:AppointmentFormComponent, canActivate:[GuardAuthService]},
  { path: 'appointment-confirmation/:id', component: AppointmentConfirmationComponent},
  {path: "addBarber/:id", component:AddBarberComponent, canActivate:[GuardManagerService]},
  {path: "editSchedule/:shop/:id",component:EditScheduleComponent, canActivate:[GuardManagerService]},
    
  {path: 'admin', component:AdminComponent},
  {path: 'addSchedule/:shop/:id', component:AddScheduleComponent,canActivate:[GuardManagerService]},
  {path: 'accountProfile/:id', component:AccountProfileComponent},
  {path: 'changeProfile/:id', component:ChangeProfileComponent,canActivate:[GuardAuthService]},
   

  ///////////////////////////////////////////////////////
  // From old Master vvv
  
  //{path: "barProf/:id", component:BarberProfileComponent},
  //{path: "appointment-form/:id", component:AppointmentFormComponent, canActivate:[GuardAuthService]},
  //{ path: 'appointment-confirmation/:id', component: AppointmentConfirmationComponent},
  //{path: "addBarber/:id", component:AddBarberComponent, canActivate:[GuardAuthService]},
  //{path: "editSchedule/:id",component:EditScheduleComponent, canActivate:[GuardAuthService]},

  { path: 'barberAppointments/:id', component: AppointmentByBarberComponent, canActivate:[GuardAuthService]},
  { path: 'todayBarberAppointments/:id', component: AppointmentsForDayComponent},
  { path: 'customerAppointments/:id', component: CustomerAppointmentsComponent, canActivate:[GuardAuthService]},

  //{ path: 'barberAppointments/:id', component: AppointmentByBarberComponent},
  
  { path: 'addBarberShop', component: NewShopComponent, canActivate:[GuardAdminService] },
  { path: 'removeBarberShop', component: RemoveBarberShopComponent, canActivate:[GuardAdminService] },
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
