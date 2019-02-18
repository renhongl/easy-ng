import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { module as HelloWorldModule } from '../../modules/hello-world';
import { module as SharedModule } from '../../shared';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    HelloWorldModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
