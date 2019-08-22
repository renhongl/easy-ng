import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Auth, Message } from '../../shared/global.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-module-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private notification: NzNotificationService, private authService: AuthService) { }

  ngOnInit() {
    this.subscribeAuth();
  }

  subscribeAuth(): void {
    this.authService.getAuth().subscribe((auth: Auth) => {
      this.createBasicNotification({
        title: auth.msg,
        content: ''
      });
    });
  }

  createBasicNotification(message: Message): void {
    this.notification.blank( message.title, message.content);
  }
}


