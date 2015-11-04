
export class Travel {
    constructor(
        public id: string,
        public place: string,
        public country: string,
        public year: number,
        public img: string
    ) {}
    isOld() {
        return new Date().getFullYear() - this.year > 0;
    }
}

