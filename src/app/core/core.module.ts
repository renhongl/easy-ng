
// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@blox/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


// components
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MessageComponent } from './message/message.component';



// services
import { NavControlService } from './nav-control/nav-control.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { AuthGuardService } from './auth-guard/auth-guard.service';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    MessageComponent
  ],
  providers: [
    {
      provide: 'navControl',
      useClass: NavControlService
    },
    {
      provide: 'authService',
      useClass: AuthService
    },
    {
      provide: 'userService',
      useClass: UserService
    },
    {
      provide: 'authGuardService',
      useClass: AuthGuardService
    }
  ]
})
export class CoreModule { }
