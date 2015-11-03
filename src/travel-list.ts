import {
    Component,
    CORE_DIRECTIVES
} from 'angular2/angular2';
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';

import { Travel } from 'dist/travel'
import { TravelManager } from 'dist/travel-manager'
import { TravelShow } from 'dist/travel-show'


@Component({
    selector: 'travel-list',
    viewBindings: [],
    template: `
        <h2>Travels List:</h2>
        <table class="pure-table pure-table-horizontal" id="travel-list">
            <thead>
                <tr>
                    <td>Picture</td><td>Place</td><td>Country</td><td>Year</td><td></td>
                </tr>
            </thead>
            <tbody>
                <tr *ng-for="#travel of travels">
                    <td><img src="img/{{travel.img || 'none.jpg'}}"/></td>
                    <td [style.color]="travel.year?'green':'red'">{{travel.place}}</td>
                    <td>{{travel.country}}</td>
                    <td>{{travel.year}}</td>
                    <td>
                        <a href (click)="select(travel)" class="pure-button">
                            <i class="fa fa-caret-square-o-down"></i> Show
                        </a>
                        <a href [router-link]="['/Edit', {id: travel.id}]" class="pure-button">
                            <i class="fa fa-pencil-square-o"></i> Edit
                        </a>
                        <a href (click)="remove(travel)" class="pure-button">
                            <i class="fa fa-trash-o"></i> Remove
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <travel-show [travel]="selectedTravel"></travel-show>
    `,
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, TravelShow]
})
export class TravelList {
    constructor(public cm: TravelManager) {
        this.travels = this.cm.list;
    }
    select(travel) {
        this.selectedTravel = travel;
        return false;
    }
    remove(travel) {
        this.cm.remove(travel);
        return false;
    }
    travels: Travel[];
    selectedTravel: Travel;
}