import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UiModule } from '../../shared/ui.module';
import { HeaderModule } from '../../modules/header/header.module';
import { NavigationModule } from '../../modules/navigation/navigation.module';
import { EchartsExampleModule } from '../../modules/echarts-example/echarts-example.module';
import { LeafletExampleModule } from '../../modules/leaflet-example/leaflet-example.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    UiModule,
    HomeRoutingModule,
    HeaderModule,
    NavigationModule,
    EchartsExampleModule,
    LeafletExampleModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
