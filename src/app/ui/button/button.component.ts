import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../models/country';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
 @Input() text: string;
 @Input() buttonClass: string;
 
 @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();
 
  constructor(private data:DataService) {}
 
  ngOnInit(): void {
  }

  get countries(): Array<Country> {
    return this.data.getCountries();
  }
  
  click(): void {
    this.clickEvent.next(this.text);
  }
}
