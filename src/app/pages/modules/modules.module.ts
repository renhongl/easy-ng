import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { UiModule } from '../../shared/ui.module';
import { HeaderModule } from '../../modules/header/header.module';
import { NavigationModule } from '../../modules/navigation/navigation.module';
import { EchartsExampleModule } from '../../modules/chart/chart.module';
import { MapModule } from '../../modules/map/map.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ModulesComponent,
  ],
  imports: [
    UiModule,
    HomeRoutingModule,
    HeaderModule,
    NavigationModule,
    EchartsExampleModule,
    ComponentsModule,
    MapModule
  ],
  exports: [
    ModulesComponent
  ]
})
export class ModulesModule { }
