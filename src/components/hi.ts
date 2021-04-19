export class Hi{
    name: string;
    constructor(name:string) {
        this.name = name;
    }

    greet(): string {
        return `hi ${this.name}`;
    }
}