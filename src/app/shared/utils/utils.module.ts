import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiteBoxComponent } from './reusable-components/lite-box/lite-box.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    LiteBoxComponent,
  ],
  imports: [
    CommonModule,   
    FormsModule,
    ReactiveFormsModule ,
    MaterialModule
  ],
  exports: [
    LiteBoxComponent,
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UtilsModule { }
