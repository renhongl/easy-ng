import { Component, OnInit, Inject } from '@angular/core';
import { LoginResponse } from './login.model';
import { Router } from '@angular/router';
import { MessageComponent } from '../../core/components/message/message.component';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageComponent]
})
export class LoginComponent implements OnInit {

  userName: string = 'default';
  password: string = 'default';

  constructor(
    @Inject('authService') private authService, 
    private route: Router,
    private messageObj: MessageComponent
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userName, this.password)
      .subscribe((data: Array<LoginResponse>) => {
        if (data.length > 0) {
          window.sessionStorage.setItem('ng-sdk-token', data[0].token);
          this.route.navigateByUrl('');
          this.messageObj.createBasicNotification({
            title: 'Login Successfully.',
            content: 'You now can view all your component.'
          });
        } else {
          alert('User name of password incorrect');
        }
      }, error => {
        alert(error);
      }
      );
  }
}
