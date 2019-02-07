import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//Third party modules
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '@blox/material';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    NgZorroAntdModule,
    MatInputModule,
    MaterialModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    NgZorroAntdModule,
    MatInputModule,
    MaterialModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
