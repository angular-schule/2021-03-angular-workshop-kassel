import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, share, shareReplay, switchMap } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingle(isbn)),
    // shareReplay(1)
  );

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }
}
