import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HelloWorldModule } from '../../modules/hello-world/hello-world.module';
import { SharedModule } from '../../shared/shared.module';
import { CounterModule } from '../../modules/counter/counter.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    HelloWorldModule,
    CounterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
