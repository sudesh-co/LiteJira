import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from '../../../shared/customizer-settings/customizer-settings.service';
import { UtilsModule } from '../../../shared/utils/utils.module';
import { MaterialModule } from '../../../shared/utils/material/material.module';

@Component({
    selector: 'app-sign-in',
    imports: [RouterLink, UtilsModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  public isBrowser: any;
    constructor(
      private fb: FormBuilder,
      @Inject(PLATFORM_ID) private platformId: Object,
        private router: Router,
        public themeService: CustomizerSettingsService
    ) {
      this.isBrowser = isPlatformBrowser(this.platformId); 
        this.authForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    // Password Hide
    hide = true;

    // Form
    authForm: FormGroup;
    onSubmit() {
        if (this.authForm.valid) {
            this.router.navigate(['/']);
        } else {
            console.log('Form is invalid. Please check the fields.');
        }
    }

}
