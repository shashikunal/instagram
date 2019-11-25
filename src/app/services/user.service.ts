import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  set(getDatafromDatabase) {
    localStorage.setItem("user", JSON.stringify(getDatafromDatabase));
  }
  get_Profile() {
    let user = localStorage.getItem("user");
    return JSON.parse(user);
  }
  destroy(userData) {
    localStorage.removeItem("user");
  }
}
