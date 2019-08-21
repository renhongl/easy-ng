import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    UiModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
