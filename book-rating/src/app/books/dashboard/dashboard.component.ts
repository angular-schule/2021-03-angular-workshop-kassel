import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit(): void {

    this.books = [{
      isbn: '001',
      title: 'Angular',
      description: 'test',
      rating: 5
    }, {
      isbn: '111',
      title: 'React',
      description: 'komisches Buch',
      rating: 3
    }, {
      isbn: '222',
      title: 'jQuery',
      description: 'neee!!!!',
      rating: 1
    }];
  }

}
