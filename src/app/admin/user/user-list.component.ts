import { Component, Injector } from '@angular/core';
import { CoreListComponent } from './../../shared/super/core-list.component';
import { UserGraphQLService } from './user-graphql.service';

@Component({
    selector: 'ps-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent extends CoreListComponent {

    columnsSearch: string[] = [
        'id', 'name', 'profile.name'
    ];

    constructor(
        protected injector: Injector,
        protected graphQL: UserGraphQLService
    ) {
        super(injector, graphQL);
    }
}
