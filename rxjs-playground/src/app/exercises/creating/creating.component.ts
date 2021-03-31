import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. Observer
    const observer = {
      next: e => this.log(e),
      error: err => this.log('ERROR:' + err),
      complete: () => this.log('COMPLETE')
    };

    // 2. Observable
    const observable$ = new Observable(subscriber => {
      subscriber.next('🤩');
      const x = setTimeout(() => { subscriber.next('yay!'); console.log('Das Licht leuchtet!'); }, 2000);
      const y = setTimeout(() => { subscriber.next('blubb'); console.log('Das Licht leuchtet!!!!!'); }, 2100);
      setTimeout(() => subscriber.complete(), 3000);

      return () => {
        console.log('Hier wird audgeräumt!');
        clearTimeout(x);
        clearTimeout(y);
      }
    });

    // 3. Subscription
    const subscription = observable$.subscribe(observer);
    const subscription2 = observable$.subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 1000);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
