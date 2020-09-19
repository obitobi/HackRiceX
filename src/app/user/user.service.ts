import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserModel} from './user.model';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private userUrl = 'https://cors-anywhere.herokuapp.com/https://hackathone2.herokuapp.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.userUrl)
      .pipe(
        catchError(this.handleError<UserModel[]>('getUsers', []))
      );
  }
  getUser(id: number): Observable<UserModel> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<UserModel>(url)
      .pipe(
        catchError(this.handleError<UserModel>(`getUserWithId=${id}`))
      );
  }
  updateUser(user: UserModel): Observable<any> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.put(url, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }
  createUser(user: string): Observable<any> {
    return this.http.post(this.userUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('createUser'))
    );
  }
  deleteUser(user: UserModel): Observable<UserModel> {
    const url = `${this.userUrl}/${user.id}`;
    return this.http.delete<UserModel>(url, this.httpOptions).pipe(
      catchError(this.handleError<UserModel>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
