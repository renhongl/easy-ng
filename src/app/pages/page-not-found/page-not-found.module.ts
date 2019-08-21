import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { UiModule } from '../../shared/ui.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    UiModule,
    PageNotFoundRoutingModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
