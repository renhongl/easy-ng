import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
