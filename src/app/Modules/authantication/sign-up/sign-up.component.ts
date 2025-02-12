import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../shared/customizer-settings/customizer-settings.service';
import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { LiteBoxComponent } from '../../../shared/utils/reusable-components/lite-box/lite-box.component';
import { MaterialModule } from '../../../shared/utils/material/material.module';
@Component({
    selector: 'app-sign-up',
    standalone:false,
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
    isBrowser: boolean;

    constructor(
        private fb: FormBuilder,
        @Inject(PLATFORM_ID) private platformId: Object,
        private router: Router,
        public themeService: CustomizerSettingsService
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId); 
        this.authForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required], 
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
