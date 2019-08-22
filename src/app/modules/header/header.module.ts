import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UiModule } from '../../shared/ui.module';
import { UtilsModule } from '../../utils/utils.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UiModule,
    UtilsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
