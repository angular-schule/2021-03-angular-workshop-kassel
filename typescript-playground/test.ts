
export var x = 2;

export class Test {

    constructor(private antwort: number) {
        this.antwort = antwort;
        console.log('Hallo Welt! 😀👋', this.antwort, x)
        
    }
}
