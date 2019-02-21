import { Component, OnInit, Inject } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Auth, Message } from '../core.constants';

@Component({
  selector: 'app-core-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private notification: NzNotificationService, @Inject('authService') private authService) { }

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


