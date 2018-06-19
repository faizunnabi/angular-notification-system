import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }
  counter = 0;
  messages: any;
  showNoti = false;
  ngOnInit() {
    this.notificationService.getMessage().subscribe(
      res => {
        this.messages = res;
        this.counter = res.length;
      }
    );
  }

  showNotification() {
    if (this.showNoti === false) {
      this.showNoti = true;
    } else {
      this.showNoti = false;
    }
  }

}
