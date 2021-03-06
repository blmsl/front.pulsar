import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { CoreDetailComponent } from './../../shared/super/core-detail.component';
import { ActionGraphQLService } from './action-graphql.service';

@Component({
    selector: 'ps-action-detail',
    templateUrl: './action-detail.component.html'
})
export class ActionDetailComponent extends CoreDetailComponent {

    constructor(
        protected injector: Injector,
        protected grahpQL: ActionGraphQLService
    ) {
        super(injector, grahpQL);
    }

    createForm() {
        this.fg = this.fb.group({
            id: ['', [Validators.required, Validators.minLength(2)] ],
            name: ['', Validators.required ]
        });
    }
}
