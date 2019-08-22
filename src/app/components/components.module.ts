import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedNavComponent } from './selected-nav/selected-nav.component';

@NgModule({
  declarations: [SelectedNavComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectedNavComponent]
})
export class ComponentsModule { }
