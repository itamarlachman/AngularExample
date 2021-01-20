import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Breed, Cat, Gender } from '../models/cat';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  protected countries: Array<Country>
  protected cats: Array<Cat> 
  protected books: Array<Book>;

  constructor(private http: HttpClient) { 
    this.countries = [];
    this.countries.push(new Country('il','Israel'));
    this.countries.push(new Country('us','USA'));
    this.countries.push(new Country('fr','France'));
    this.countries.push(new Country('uk','United Kingdom'));
    
    this.cats = [];
    this.cats.push(new Cat('amos',10, Gender.Male,Breed.Persian));
    this.cats.push(new Cat('lilith',10, Gender.Female,Breed.Siamese));

    this.http.get<Array<Book>>('../assets/books.json')
             .subscribe(books=> {
               this.books = books;
             });
  }

  public getCats(): Array<Cat> {
    return this.cats;
  }

  public getCountries(): Array<Country> {
    return this.countries;
  }

  getBooks(): any[] {
    return this.books;
  }

  getContacts():any{
    let headers= new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.http.get('http://localhost:3000/customers');
  }

  addContact():any{
    let headers= new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.http.post('http://localhost:3000/addCustomer',null, { headers });
  }

  getTime(cat: Cat): any {
    let headers= new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.http.post('http://localhost:3000/test', { cat: cat } , { headers });
  }
  
}
