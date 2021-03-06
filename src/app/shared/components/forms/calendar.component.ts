import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { onValueChangedFormControl } from './../../super/core-validation';

@Component({
    selector: 'ps-calendar',
    template: `
        <div [formGroup]="form">
            <p-calendar [formControlName]="name"
                        [showTime]="showTime"
                        [dateFormat]="dateFormat"
                        [placeholder]="label"
                        [showIcon]="showIcon"
                        (change)="handleChange($event)"></p-calendar>
            <div *ngIf="error" class="ui-message ui-messages-error ui-corner-all">
                {{ error }}
            </div>
        <div>
    `,
    styles: [`
        :host{
            margin-bottom: 40px;
        }
        .ui-messages-error {
            position: absolute;
        }
        input.ng-dirty.ng-invalid {
            border-bottom-color: #e62a10; 
        }`]
})
export class CalendarComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() showTime: boolean = false;
    @Input() dateFormat: string;
    @Input() showIcon: boolean = false;

    @Output() onChange = new EventEmitter<any>();

    formControl: AbstractControl;
    error: string;

    constructor() { }

    ngOnInit() {
        this.formControl = this.form.controls[this.name];

        // Error validation
        this.form
            .controls[this.name]
            .valueChanges
            .subscribe(data => this.error = onValueChangedFormControl(this.formControl, data));
    }

    @Input()
    set errors(errors: Object){
        if (this.name && errors && errors[this.name]) {
            this.error = errors[this.name];
        }
    }

    handleChange($event) {
        this.onChange.emit($event);
    }
}
