import { Component, Input  } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  bgLight = 'bg-light';

  @Input()
  book: Book;

  get stars(): undefined[] {
    return new Array(this.book.rating);
  }
}
