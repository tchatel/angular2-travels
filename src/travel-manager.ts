
import { Travel } from './travel'


export class TravelManager {
    list: Travel[] = [];
    constructor() {
    }
    find(id: string): Travel {
        return this.list.filter(c => c.id == id)[0];
    }
    remove(travel: Travel) {
        let index = this.list.indexOf(travel);
        this.list.splice(index, 1);
    }
}

export class SampleTravelManager extends TravelManager {
    constructor() {
        super();
        this.list.push(
            new Travel("SF2015", "San Francisco", "USA", 2015, "sanfrancisco.jpg"),
            new Travel("NA2014", "Nantes", "France", 2014, "nantes.jpg"),
            new Travel("BX2014", "Bruxelles", "Belgique", 2014, "bruxelles.jpg"),
            new Travel("YO2014", "Yosemite", "USA", 2014, "yosemite.jpg"),
            new Travel("BT2013", "Bretagne", "France", 2013, "bretagne.jpg")
        );
    }
}

