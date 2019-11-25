import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class NavGuard implements CanActivate {
  canActivate() {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }
}
