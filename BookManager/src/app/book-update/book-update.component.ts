import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number;
  book: Book;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      description: '',
    });
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.id;
      this.bookService.getDetail(this.bookId).subscribe(data => this.book = data);
    });
  }

  onSubmit() {
    const {value} = this.bookForm;
    this.bookService.update(this.bookId, value).subscribe(() => {
      this.router.navigate(['']);
    });

  }
}
