import { CreateProfileComponent } from "./create-profile/create-profile.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { NavGuard } from "./nav.guard";
import { AllpostsComponent } from "./allposts/allposts.component";
import { HomeComponent } from "./home/home.component";

import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "allposts", component: AllpostsComponent, canActivate: [NavGuard] },
  {
    path: "create_profile",
    component: CreateProfileComponent,
    canActivate: [NavGuard]
  },
  {
    path: "user_profile",
    component: ProfilesComponent,
    canActivate: [NavGuard]
  },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
