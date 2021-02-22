import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {BookComponent} from './book/book.component';
import { BarberListComponent } from './barber-list/barber-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { BarberProfileComponent } from './barber-profile/barber-profile.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "book", component: BookComponent},
  {path: "about", component: AboutComponent},
  {path: "barlist", component: BarberListComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent },
  {path: "register", component: RegisterComponent },
  {path: "shop-profile", component: ShopProfileComponent},
  {path: "profile-page", component: ProfilePageComponent},
  {path: "newReview", component:NewReviewComponent},
  {path: "reviews-list", component:ReviewListComponent},
  {path: "barProf", component:BarberProfileComponent},
  {path: "appointment-form", component:AppointmentFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
