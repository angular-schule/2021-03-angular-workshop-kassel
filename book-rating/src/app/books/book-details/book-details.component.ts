import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    map(isbn => this.bs.getSingle(isbn)),
    tap(x => { debugger })
  );

  constructor(
    private router: ActivatedRoute,
    private bs: BookStoreService) { }


  nOnInit() {
    this.router.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      map(isbn => this.bs.getSingle(isbn)),
    ).subscribe(x => x.subscribe(book => book)
  }
}
