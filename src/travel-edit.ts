import {
    Component,
    FORM_DIRECTIVES
} from 'angular2/angular2';
import {
    ROUTER_DIRECTIVES,
    RouteParams
} from 'angular2/router';

import { Travel } from './travel'
import { TravelManager } from './travel-manager'


@Component({
    selector: 'travel-edit',
    template: `
        <h2>Edit travel: {{travel.place}}</h2>
        <form class="pure-form pure-form-aligned">
            <fieldset>
                <div class="pure-control-group">
                    <label for="name">PLace</label>
                    <input id="name" type="text" [(ng-model)]="travel.place"/>
                </div>
                <div class="pure-control-group">
                    <label for="email">Country</label>
                    <input id="email" type="text" [(ng-model)]="travel.country"/>
                </div>
                <div class="pure-control-group">
                    <label for="phone">Year</label>
                    <input id="phone" type="number" [(ng-model)]="travel.year"/>
                </div>
                <div class="pure-controls">
                    <a [router-link]="['/List']" class="pure-button pure-button-primary">Return to list</a>
                </div>
            </fieldset>
        </form>
    `,
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class TravelEdit {
    travel: Travel;
    constructor(tm: TravelManager, params: RouteParams) {
        this.travel = tm.find(params.get('id'));
    }
}
