import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CoreDetailComponent } from './../../shared/super/core-detail.component';

import { TaxRateZoneService } from './tax-rate-zone.service';
import { TaxRateZone } from './../market.models';
import { CountryService } from './../../admin/countries/country.service';
import { Country } from './../../admin/admin.models';
import { SelectItem } from 'primeng/primeng';

//import * as _ from 'lodash';

@Component({
    selector: 'app-tax-rate-zone-detail',
    templateUrl: 'tax-rate-zone-detail.component.html'
})
export class TaxRateZoneDetailComponent extends CoreDetailComponent implements OnInit {

    private countries: Country[] = [];

    // paramenters for parent class
    private object: TaxRateZone = new TaxRateZone(); // set empty object
    private f: Function = (response = undefined) => {
        if (this.dataRoute.action === 'edit') {
            this.object = response.data; // function to set custom data

            this.fg.patchValue(this.object); // set values of form

            // TODO, apaño para establecer un valor por defecto
            this.fg.controls['country_id'].setValue(this.object.country);
            this.fg.controls['country_id'].setValue(this.object.country.id, { emitModelToViewChange: false });
        }
    }

    constructor(
        protected injector: Injector,
        protected objectService: TaxRateZoneService,
        protected countryService: CountryService
    ) {
        super(injector);
    }

    ngOnInit() {
        this.createForm(); // create form

        // get countries
        this.countryService.getRecords(this.configService.getConfig('base_lang').id)
            .subscribe((response) => {
                this.countries = <Country[]>response.data;

                super.getRecordHasIdParamenter(this.f);
            });
    }

    createForm() {
        this.fg = this.fb.group({
            id: [{value: '', disabled: true}],
            name: ['', Validators.required ],
            country_id: '',
            cp: '',
            tax_rate: [null, Validators.required ]
        });
    }

}