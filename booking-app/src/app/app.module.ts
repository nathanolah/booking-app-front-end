import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";

import { PagingComponent } from './paging/paging.component'; 

import { InterceptTokenService } from './intercept-token.service';
import { LoginBarberComponent } from './login-barber/login-barber.component';
import { AddBarberComponent } from './add-barber/add-barber.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';



export function tokenGetter() {
  return localStorage.getItem('access_token');
}


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
    AboutComponent,
    LoginBarberComponent,
    AddBarberComponent,
    EditScheduleComponent,
    PagingComponent,
    WaitingListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'JWT'
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:InterceptTokenService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
