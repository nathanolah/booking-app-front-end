import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentByBarberComponent } from './appointment-by-barber/appointment-by-barber.component';
import { BarberProfileComponent } from './barber-profile/barber-profile.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop-profile/:id', component: ShopProfileComponent },
  { path: 'profile-page/:id', component: ProfilePageComponent },
  { path: 'appointment-confirmation/:id', component: AppointmentConfirmationComponent},
  { path: 'reviews-list', component: ReviewsListComponent },
  { path: 'barber-profile/:id', component: BarberProfileComponent },
  { path: 'appointment-form/:id', component: AppointmentFormComponent }, 
  { path: 'customer/:id', component: CustomersComponent },
  { path: 'customers-list', component: CustomersListComponent},
  { path: 'appointment-list', component: AppointmentListComponent},
  { path: 'barberAppointments/:id', component: AppointmentByBarberComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
