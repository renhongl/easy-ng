import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeDate } from './customizeDate.pipe';

@NgModule({
  declarations: [CustomizeDate],
  imports: [
    CommonModule
  ],
  exports: [CustomizeDate]
})
export class UtilsModule { }
