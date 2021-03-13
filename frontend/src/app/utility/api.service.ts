import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.apiBaseUrl;
  private httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getApi(myUrl: String): Observable<any> {
    return this.http.get<any>(this.url + myUrl, this.httpOptions).pipe(
      map(data => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error.message);
      })
    );
  }

  postApi(myUrl: String, postData: any): Observable<any> {
    return this.http
      .post<any>(this.url + myUrl, postData, this.httpOptions)
      .pipe(
        map(data => {
          return data;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error.message);
        })
      );
  }
}
