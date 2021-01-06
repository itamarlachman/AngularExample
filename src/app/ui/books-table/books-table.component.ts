import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  get books(): Array<Book> {
    return this.data.getBooks();
  }
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
