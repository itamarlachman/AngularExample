import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customers = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getCustomers(): void {
    this.dataService.getContacts().subscribe(result=> {
      this.customers = result;
    });
  }

  addCustomer(): void {
    this.dataService.addContact().subscribe(result=> {
      this.customers = result;
    });
  }
}
