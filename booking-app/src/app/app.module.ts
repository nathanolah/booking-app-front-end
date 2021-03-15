import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { ReviewComponent } from './review/review.component';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfilePageComponent,
    AccountSettingsComponent,
    ShopProfileComponent,
    ReviewsListComponent,
    AppointmentFormComponent,
    ReviewComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
