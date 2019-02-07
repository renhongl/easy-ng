import { Component, OnInit, Inject } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { Message } from '../../core.model';

@Component({
  selector: 'core-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private notification: NzNotificationService) { }

  ngOnInit() {
  }

  createBasicNotification(message: Message): void {
    this.notification.blank( message.title, message.content);
  }
}


