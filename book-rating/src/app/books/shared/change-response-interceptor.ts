import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Book } from './book';

@Injectable()
export class ChangeResponseInterceptor {

  intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const isGetBooks = httpRequest.url.includes('/books') && httpRequest.method === 'GET';

    if (!isGetBooks) {
      return next.handle(httpRequest);
    }

    return next.handle(httpRequest).pipe(
      filter(event => event instanceof HttpResponse),
      map((event: HttpResponse<Book[]>) => event.clone({
        body: event.body.map(book => ({
          ...book,
          title: book.title.replace('Angular', 'Angular ❤️')
        }))
      }))
    );
  }
}
