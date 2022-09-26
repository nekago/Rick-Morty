import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get<T>(
    url: string,
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        }
  ): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${url}`, {
      params: { ...params },
    });
  }
}
