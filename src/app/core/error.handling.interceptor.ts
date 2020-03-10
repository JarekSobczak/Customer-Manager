import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {MessageService} from './message.service';

import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);

    return next.handle(req).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse) {
        this.messageService.error(`Błąd połączenia: ${error.message}`);
      }
      return throwError(error);
    }))
  }

}
