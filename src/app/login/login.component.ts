import { UserService } from "./../services/user.service";
import { MyfireService } from "./../services/myfire.service";
import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private toastService: ToastrService,
    private myFire: MyfireService,
    private userservice: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        if (userData.user.emailVerified) {
          console.log("next");
          this.myFire
            .getDataFromDatabase(userData.user.uid)
            .then(getDatafromDatabase => {
              this.userservice.set(getDatafromDatabase);
              const message = `${email} has been successfully logged in 😀`;
              this.toastService.success(message);
              this.router.navigate(["/user_profile"]);
            });
        } else {
          const errmessage = `${email} is not yet verified Please verify first then login`;
          this.toastService.error(errmessage);
          firebase.auth().signOut();
        }
      })
      .catch(err => {
        this.toastService.error(err.message);
      });
  }
}
