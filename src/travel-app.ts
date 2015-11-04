import {
    bootstrap,
    provide,
    Component
} from 'angular2/angular2';
import {
    ROUTER_DIRECTIVES,
    RouteConfig,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
} from 'angular2/router';

import { TravelManager, SampleTravelManager } from './travel-manager'
import { TravelList } from './travel-list'


@RouteConfig([
    { path: '/',            component: TravelList, as: 'List' },
])
@Component({
    selector: 'travel-app',
    template: `
        <h1>Angular 2 : Sample Travels Application</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class TravelApp {
    constructor() {
    }
}


bootstrap(TravelApp, [
    provide(TravelManager, {useClass: SampleTravelManager}),
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(APP_BASE_HREF, {useValue: '/'})
]);


