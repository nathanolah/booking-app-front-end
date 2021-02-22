import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { BarberListComponent } from './barber-list/barber-list.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { BarberProfileComponent } from './barber-profile/barber-profile.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SignupComponent,
    HeaderComponent,
    BarberListComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProfilePageComponent,
    ShopProfileComponent,
    NewReviewComponent,
    AppointmentFormComponent,
    BarberProfileComponent,
    ReviewListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
