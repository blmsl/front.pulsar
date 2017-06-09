import { Injectable, Injector } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { JsonResponse } from './../../shared/classes/json-respose';
import { CoreService } from './../../shared/super/core.service';

@Injectable()
export class LangService extends CoreService {

    constructor(
        protected injector: Injector
    ) {
        super(injector);

        this.setBaseUri(`/${this.appPrefix}/admin/lang`); // set application URL
        this.setEndpoint('/api/v1/admin/lang'); // set api URL
    }

    getActivatedLangs(): Observable<JsonResponse> {
        // build query
        return this.http
            .post(this.getEndpoint('search'), {
                'type': 'query',
                'parameters': [
                    {
                        'command': 'where',
                        'column': 'active',
                        'operator': '=',
                        'value': true
                    }
                ]
            }, this.options)
            .map((response: Response) => response.json());
    }
}
