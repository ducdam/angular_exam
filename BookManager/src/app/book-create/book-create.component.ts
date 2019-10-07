import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private bookService: BookService) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      description: '',
    });
  }

  onSubmit() {
    const {value} = this.bookForm;
    this.bookService.store(value).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}

