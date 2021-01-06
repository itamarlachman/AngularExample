import { Component, OnInit } from '@angular/core';
import { Button } from './models/button';
import { Cat } from './models/cat';
import { Country } from './models/country';
import { DataService } from './services/data.service';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
    // this.id = setInterval(() => {
    //   this.add();
    // }, 5000);
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
