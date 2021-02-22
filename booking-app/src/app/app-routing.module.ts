import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { BarberProfileComponent } from './barber-profile/barber-profile.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop-profile', component: ShopProfileComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'reviews-list', component: ReviewsListComponent },
  { path: 'barber-profile', component: BarberProfileComponent },
  { path: 'appointment-form', component: AppointmentFormComponent }, 
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
