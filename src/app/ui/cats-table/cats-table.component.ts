import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cats-table',
  templateUrl: './cats-table.component.html',
  styleUrls: ['./cats-table.component.css']
})
export class CatsTableComponent implements OnInit {
  get cats(): Array<Cat> {
    return this.data.getCats();
  }
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
