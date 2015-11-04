import {
    bootstrap,
    provide,
    Component
} from 'angular2/angular2';

import { TravelManager, SampleTravelManager } from './travel-manager'
import { TravelList } from './travel-list'


@Component({
    selector: 'travel-app',
    template: `
        <h1>Angular 2 : Sample Travels Application</h1>
        <travel-list></travel-list>
    `,
    directives: [TravelList]
})
export class TravelApp {
    constructor() {
    }
}


bootstrap(TravelApp, [
    provide(TravelManager, {useClass: SampleTravelManager})
]);


