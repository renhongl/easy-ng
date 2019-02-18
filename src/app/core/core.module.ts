
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
import { component as HeaderComponent } from './header';
import { component as NavigationComponent } from './navigation';
import { component as MessageComponent } from './message';



// services
import { service as NavControlService } from './nav-control';
import { service as AuthService } from './auth';
import { service as UserService } from './user';
import { service as AuthGuardService } from './auth-guard';


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
