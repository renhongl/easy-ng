import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { HeaderComponent }  from './header.component';
import { MaterialModule } from '@blox/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    AppBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
