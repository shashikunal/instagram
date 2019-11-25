import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NoticationsService {
  private sub = new Subject<any>();
  public emitter = this.sub.asObservable();

  display(type, message) {
    this.sub.next({ type, message });
  }
  constructor() {}
}
