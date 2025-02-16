
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lite-checkbox',  
  imports:[MaterialModule,CommonModule],
  templateUrl: './lite-checkbox.component.html',
  styleUrls: ['./lite-checkbox.component.scss']
})
export class LiteCheckboxComponent implements OnInit {
  @Input() formGroup!: FormGroup;  
  @Input() field!: string;         
  @Input() Caption: string = '';   
  @Input() IsReq: boolean = false;
  @Input() IsPattern: boolean = false; 
  @Input() pattern_msg: string = ''; 
  @Input() max_min_msg: string = ''; 

  constructor() {}

  ngOnInit(): void {
    
  }

  hasError(field: string, errorType: string): boolean {
    return this.formGroup.controls[field]?.hasError(errorType) ?? false;
  }


  smartTextValueChange(event: any): void {
    this.formGroup.controls[this.field].setValue(event.checked);
    
  }
}