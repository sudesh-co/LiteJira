import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { CompanyRoutingModule } from './company-routing.module';
import { MaterialModule } from '../../shared/utils/material/material.module';
import { LiteBoxComponent } from '../../shared/utils/reusable-components/lite-box/lite-box.component';
import { LiteDdlComponent } from '../../shared/utils/reusable-components/lite-ddl/lite-ddl.component';
import { LiteDatePickerComponent } from '../../shared/utils/reusable-components/lite-date-picker/lite-date-picker.component';
import { LiteEditorComponent } from '../../shared/utils/reusable-components/lite-editor/lite-editor.component';
import { LiteFileUploaderComponent } from '../../shared/utils/reusable-components/lite-file-uploader/lite-file-uploader.component';
import { LiteTextareaComponent } from '../../shared/utils/reusable-components/lite-textarea/lite-textarea.component';
import { CompanyAddEditComponent } from './company-details/company-add-edit/company-add-edit.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';


@NgModule({
  declarations: [CompanyAddEditComponent],
  imports: [
    CommonModule,
    LiteBoxComponent,
    LiteDdlComponent,
    LiteEditorComponent ,
    LiteFileUploaderComponent,
    LiteDatePickerComponent,
    LiteTextareaComponent,
    LiteDdlComponent,
    MaterialModule,
    CompanyRoutingModule,
    FileUploadModule
  ]
})
export class CompanyModule { }
