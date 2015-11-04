import {
    bootstrap,
    Component
} from 'angular2/angular2';


@Component({
    selector: 'travel-app',
    template: `
        <h1>Angular 2 : Sample Travels Application</h1>
    `,
    directives: []
})
export class TravelApp {
    constructor() {
    }
}


bootstrap(TravelApp, []);


