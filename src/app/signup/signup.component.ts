import { NoticationsService } from "./../services/notications.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private notifier: NoticationsService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const fullname = form.value.fullname;
    const username = form.value.username;
    const phone = form.value.phone;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
        console.log(userData);
        let message = `A verification has been sent to ${email} please verify email address✉️`;
        this.toastr.success(message);
        this.router.navigate(["/login"]);

        return firebase
          .database()
          .ref("/users" + userData.user.uid)
          .set({
            email,
            password,
            fullname,
            username,
            phone,
            uid: userData.user.uid,
            RegistrationDate: new Date().toString()
          })

          .catch(err => {
            this.toastr.error(err.message);
            console.log(err);
          });
      })
      .catch(err => {
        this.toastr.error(err.message);
        console.log(err);
      });
  }
}
