import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) {
  }

  ngOnInit(): void {

    this.books = [{
      isbn: '001',
      title: 'Angular',
      description: 'test',
      rating: 5,
      price: 39.50
    }, {
      isbn: '111',
      title: 'React',
      description: 'komisches Buch',
      rating: 3,
      price: 10
    }, {
      isbn: '222',
      title: 'jQuery',
      description: 'neee!!!!',
      rating: 1,
      price: 2.22
    }];
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // };
    this.updateAndSortBooks(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}

