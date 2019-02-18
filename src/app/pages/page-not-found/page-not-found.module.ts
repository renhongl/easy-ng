import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { module as SharedModule } from '../../shared';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    PageNotFoundRoutingModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule { }
