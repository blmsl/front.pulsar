import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';

import { CoreDetailComponent } from './../../shared/super/core-detail.component';

import { OrderStatusService } from './order-status.service';
import { OrderStatus } from '../market.models';

// custom imports
import { Lang } from './../../admin/admin.models';
import { LangService } from './../../admin/langs/lang.service';
import { SelectItem } from 'primeng/primeng';

import * as _ from 'lodash';

@Component({
    selector: 'ps-order-status-detail',
    templateUrl: './order-status-detail.component.html'
})
export class OrderStatusDetailComponent extends CoreDetailComponent implements OnInit {

    private langs: SelectItem[] = [];

    // paramenters for parent class
    private object: OrderStatus = new OrderStatus(); // set empty object
    private f: Function = (response = undefined) => {
        if (this.dataRoute.action === 'edit' || this.dataRoute.action === 'create-lang') {
            this.object = response.data; // function to set custom data
            this.fg.patchValue(this.object); // set values of form, if the object not match with form, use pachValue instead of setvelue

            // set new lang
            if (this.dataRoute.action === 'create-lang') {
                this.fg.patchValue({
                    lang_id: this.params['newLang']
                });
            } else {
                this.fg.patchValue({
                    lang_id: this.params['lang']
                });
            }
        }
    }

    constructor(
        protected injector: Injector,
        protected objectService: OrderStatusService,
        protected confirmationService: ConfirmationService,
        protected langService: LangService
    ) {
        super(injector);
    }

    ngOnInit() {
        this.createForm(); // create form

        this.langService.getRecords()
            .subscribe((response) => {

            this.langs = _.map(<Lang[]>response.data, obj => {
                return { label: obj.name, value: obj.id };
            }); // get langs

            this.langs.unshift({ label: 'Select a language', value: '' });
            super.getRecordHasIdParamenter(this.f);
        });
    }

    createForm() {
        this.fg = this.fb.group({
            id: [{value: '', disabled: true}, Validators.required ],
            lang_id: [
                {value: '', disabled: this.dataRoute.action === 'edit' || this.dataRoute.action === 'create-lang'}, Validators.required
            ],
            name: ['', Validators.required ],
            active: ''
        });
    }

}