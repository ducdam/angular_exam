import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];
  countBook: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      this.countBook = this.books.length;
    });
  }

  deleteBook(id: number) {
    this.bookService.delete(id).subscribe(next => this.getBook());
  }
}
