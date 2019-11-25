import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import * as firebase from "firebase";

@Component({
  selector: "app-profiles",
  templateUrl: "./profiles.component.html",
  styleUrls: ["./profiles.component.css"]
})
export class ProfilesComponent implements OnInit {
  username: any;
  email: any;
  uid: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        let users = this.userService.get_Profile();
        this.username = users.username;
        this.email = users.email;
        this.uid = users.uid;
      }
    });
  }
}
