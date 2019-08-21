import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Third party modules
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '@blox/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxEchartsModule } from 'ngx-echarts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    NgZorroAntdModule,
    MatInputModule,
    MaterialModule,
    MatFormFieldModule,
    MatCheckboxModule,
    NgxEchartsModule,
    LeafletModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    NgZorroAntdModule,
    MatInputModule,
    MaterialModule,
    MatFormFieldModule,
    MatCheckboxModule,
    NgxEchartsModule,
    LeafletModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class UiModule { }
