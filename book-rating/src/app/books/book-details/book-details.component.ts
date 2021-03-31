import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.router.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    concatMap(isbn => this.bs.getSingle(isbn)),
  );

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }
}
