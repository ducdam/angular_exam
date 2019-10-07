import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

const APIUrl = ' http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(APIUrl);
  }

  store(obj): Observable<Book> {
    return this.http.post<Book>(APIUrl, obj);
  }

  delete(id: number): Observable<any> {
    if (confirm('ban co muon xoa ')) {
      return this.http.delete(APIUrl + '/' + id);
    }
  }

  getDetail(id: number): Observable<Book> {
    return this.http.get<Book>(APIUrl + '/' + id);
  }

  update(id: number, obj: Book): Observable<Book> {
    return this.http.put<Book>(APIUrl + '/' + id, obj);
  }
}
