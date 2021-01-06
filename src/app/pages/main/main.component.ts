import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/models/button';
import { Country } from 'src/app/models/country';
import { Person } from 'src/app/models/person';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  id;
  counter: number = 4;
  items: Array<String> = ['1', '2', '3'];
  persons: Array<Person> = [];

  get countries(): Array<Country> {
    return this.data.getCountries();
  }

  buttons: Array<Button> = [
    new Button('+','btn btn-primary'),
    new Button('-','btn btn-info'),
    new Button('R','btn btn-danger'),
  ];

  constructor(private data: DataService) {
    for (let i: number = 0; i < 10; i++)
      this.persons.push(new Person(i.toString(), i.toString(), i));
  }

  ngOnInit(): void {
  }

  add(): void {
    this.items.push(this.counter.toString());
    this.counter++;
  }

  remove(): void {
    const item = this.items.pop();
    console.log('removed', item);
  }

  reset(): void {
    this.items = [];
  }

  addRemove(operation: string) {
    switch (operation) {
      case 'R':
        this.reset();
        this.counter = 1;
        break;
      case '+':
        this.add();
        break;
      case '-':
        this.remove();
        break;
    }
  }
}
