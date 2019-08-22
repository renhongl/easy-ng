import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { UtilsModule } from '../../utils/utils.module';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    UtilsModule,
    UiModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
