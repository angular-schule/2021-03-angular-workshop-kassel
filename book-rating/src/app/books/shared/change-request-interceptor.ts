import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class ChangeRequestInterceptor {

  intercept(
    httpRequest: HttpRequest<Book>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const isCreatePost = httpRequest.url.includes('/book') && httpRequest.method === 'POST';

    if (!isCreatePost) {
      return next.handle(httpRequest);
    }

    const { body } = httpRequest;

    const newRequest = httpRequest.clone({
      body: {
        ...body,
        title: body.title.replace('jQuery', '🙈')
      }
    });

    return next.handle(newRequest);
  }
}
