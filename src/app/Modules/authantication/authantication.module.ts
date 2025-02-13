import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../../shared/utils/material/material.module';
import { LiteBoxComponent } from '../../shared/utils/reusable-components/lite-box/lite-box.component';
import { AuthanticationRoutingModule } from './authantication-routing.module'; 

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LiteBoxComponent,
    AuthanticationRoutingModule ]
})
export class AuthanticationModule { }
