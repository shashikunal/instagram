import { NoticationsService } from "./../services/notications.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  type: string = null;
  message: string = null;
  constructor(private notifier: NoticationsService) {
    this.notifier.emitter.subscribe(data => {
      this.type = data.type;
      this.message = data.message;
    });
  }

  ngOnInit() {}
}
