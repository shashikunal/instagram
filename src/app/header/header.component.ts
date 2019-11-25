import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Boolean = false;
  constructor(
    private userService: UserService,
    private toastservice: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData && userData.emailVerified) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        firebase.auth().signOut();
      }
    });
  }
  logout(user) {
    firebase.auth().signOut();
    this.userService.destroy(user);
    this.toastservice.success("successfully signout...😃");
    this.router.navigate(["/login"]);
  }
}
