import { environment } from "src/environments/environment";
import { environment } from "./../environments/environment.prod";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { NotificationComponent } from "./notification/notification.component";
import { AllpostsComponent } from "./allposts/allposts.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { CreateProfileComponent } from "./create-profile/create-profile.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    PagenotfoundComponent,
    HomeComponent,
    NotificationComponent,
    AllpostsComponent,
    ProfilesComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(AppComponent),
    AngularFireDatabaseModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
