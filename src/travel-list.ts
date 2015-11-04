import {
    Component,
    CORE_DIRECTIVES
} from 'angular2/angular2';

import { Travel } from './travel'


@Component({
    selector: 'travel-list',
    template: `
        <style>
            table#travel-list img {
                width: 60px;
                height: 45px;
            }
            table#travel-list .old {
                color: brown;
            }
        </style>
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
                        <a href (click)="remove(travel)" class="pure-button">
                            <i class="fa fa-trash-o"></i> Remove
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    directives: [CORE_DIRECTIVES]
})
export class TravelList {
    travels: Travel[];
    selectedTravel: Travel;
    constructor() {
        this.travels = [
            new Travel("SF2015", "San Francisco", "USA", 2015, "sanfrancisco.jpg"),
            new Travel("NA2014", "Nantes", "France", 2014, "nantes.jpg"),
            new Travel("BX2014", "Bruxelles", "Belgique", 2014, "bruxelles.jpg"),
            new Travel("YO2014", "Yosemite", "USA", 2014, "yosemite.jpg"),
            new Travel("BT2013", "Bretagne", "France", 2013, "bretagne.jpg")
        ];
    }
    remove(travel: Travel) {
        let index = this.travels.indexOf(travel);
        this.travels.splice(index, 1);
        return false;
    }
}