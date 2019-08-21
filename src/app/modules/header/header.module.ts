import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
