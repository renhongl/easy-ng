import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    SharedModule
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule { }
