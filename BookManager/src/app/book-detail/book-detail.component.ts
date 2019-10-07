import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
      this.bookService.getDetail(this.bookId).subscribe(data => this.book = data);
    });
  }

  onSubmit() {
      this.router.navigate(['']);
  }
}
