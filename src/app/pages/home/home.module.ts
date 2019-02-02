import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HelloWorldModule } from '../../modules/hello-world/hello-world.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HelloWorldModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
