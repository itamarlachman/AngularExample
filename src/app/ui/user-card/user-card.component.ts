import { Component, Input } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  
  @Input() person: Person;
  @Input() total: number;
  @Input() class: string;

  constructor() { 
    this.class = 'minimalistBlack';
  }

}
