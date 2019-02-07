import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../../shared/shared.module';

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
