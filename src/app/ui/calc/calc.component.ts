import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit  {
  @Input()  
  x: number;
  
  @Input()  
  y: number;
  
  result:number;
  constructor() { 
    if (this.x == undefined) {
      this.x = 0;
    }
    if (this.y == undefined) {
      this.y = 0;
    }
  }


  ngOnInit(): void {
    this.add();
  }

  add(): void {
    this.result = this. x + this.y
  }
}
