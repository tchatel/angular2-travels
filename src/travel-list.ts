import {
    Component,
    CORE_DIRECTIVES
} from 'angular2/angular2';
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';

import { Travel } from './travel'
import { TravelManager } from './travel-manager'
import { TravelShow } from './travel-show'


@Component({
    selector: 'travel-list',
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
                    <td [ng-class]="{old: travel.isOld()}">{{travel.place}}</td>
                    <td>{{travel.country}}</td>
                    <td>{{travel.year}}</td>
                    <td>
                        <a href (click)="select(travel)" class="pure-button">
                            <i class="fa fa-caret-square-o-down"></i> Show
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
    travels: Travel[];
    selectedTravel: Travel;
    constructor(public tm: TravelManager) {
        this.travels = this.tm.list;
    }
    select(travel: Travel) {
        this.selectedTravel = travel;
        return false;
    }
    remove(travel: Travel) {
        this.tm.remove(travel);
        return false;
    }
}