import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'create', component: BookCreateComponent},
  {path: 'update/:id', component: BookUpdateComponent},
  {path: 'detail/:id', component: BookDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
