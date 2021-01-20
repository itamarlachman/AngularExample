import { Component, OnInit } from '@angular/core';
import { Breed, Cat, Gender } from 'src/app/models/cat';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  time: string;
  cat: Cat = new Cat('Leon',10,Gender.Male, Breed.Persian);
  cats: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.dataService.getTime(this.cat).subscribe(response => {
      this.time = response.result;
      this.cat = response.cat;
      this.cats = response.result1;
    });

  }

}
