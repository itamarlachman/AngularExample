import { Component, OnInit } from '@angular/core';
import { MathData } from '../../models/math-data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  data: MathData = null;
  constructor() { 
    this.data = new MathData(0,0);
  }
}
