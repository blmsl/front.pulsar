import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeNgModule } from './modules/prime-ng.module';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { PulsarFormsModule } from './components/forms/pulsar-forms.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DataContainerComponent } from './components/data-container/data-container.component';
import { CheckLangsObjectPipe } from './pipes/check-langs-object.pipe';
import { ActionLangObjectPipe } from './pipes/action-lang-object.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MenuComponent, SubMenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/errors/error.component';
import { DatatableSearchComponent } from './components/datatable-search/datatable-search.component';
import { DatatableHeaderComponent } from './components/datatable-header/datatable-header.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormService } from './components/dynamic-form/dynamic-form.service';
import { FieldValueService } from './../admin/field-value/field-value.service';
import { AttachmentService } from './components/forms/attachment-files-library/attachment.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        PulsarFormsModule,
        ReactiveFormsModule,
        PrimeNgModule,
        ConfirmDialogModule
    ],
    declarations: [
        MainLayoutComponent,
        DataContainerComponent,
        TopbarComponent,
        CheckLangsObjectPipe,
        ActionLangObjectPipe,
        MenuComponent,
        SubMenuComponent,
        ProfileComponent,
        FooterComponent,
        ErrorComponent,
        DatatableSearchComponent,
        DatatableHeaderComponent,
        ProgressSpinnerComponent,
        FormHeaderComponent,
        DynamicFormComponent
    ],
    providers: [
        ConfirmationService,
        DynamicFormService,
        FieldValueService,
        AttachmentService
    ],
    exports: [
        CommonModule,
        FormsModule,
        PulsarFormsModule,
        ReactiveFormsModule,
        PrimeNgModule,
        ConfirmDialogModule,
        MainLayoutComponent,
        ErrorComponent,
        DataContainerComponent,
        DatatableSearchComponent,
        DatatableHeaderComponent,
        ProgressSpinnerComponent,
        FormHeaderComponent,
        DynamicFormComponent,
        CheckLangsObjectPipe,
        ActionLangObjectPipe
    ]
})

export class SharedModule { }
