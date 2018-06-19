import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message: any = '';
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notificationService.setMessage(this.message);
    this.message = '';
  }

}
