import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserModel} from '../user/user.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.productUrl)
      .pipe(
        catchError(this.handleError<UserModel[]>('getProducts', []))
      );
  }
  getProduct(id: number): Observable<UserModel> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<UserModel>(url)
      .pipe(
        catchError(this.handleError<UserModel>(`getUserWithId=${id}`))
      );
  }
  updateProduct(user: UserModel): Observable<any> {
    const url = `${this.productUrl}/${user.id}`;
    return this.http.put(url, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  createProduct(user: string): Observable<any> {
    return this.http.post(this.productUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('createProduct'))
    );
  }
  deleteProduct(user: UserModel): Observable<UserModel> {
    const url = `${this.productUrl}/${user.id}`;
    return this.http.delete<UserModel>(url, this.httpOptions).pipe(
      catchError(this.handleError<UserModel>('deleteProduct'))
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
