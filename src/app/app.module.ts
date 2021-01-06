import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './ui/user-card/user-card.component';
import { MessageComponent } from './ui/message/message.component';
import { RegistrationComponent } from './ui/registration/registration.component';
import { CalcComponent } from './ui/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './ui/button/button.component';
import { CatsTableComponent } from './ui/cats-table/cats-table.component';
import { BooksTableComponent } from './ui/books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MessageComponent,
    RegistrationComponent,
    CalcComponent,
    ButtonComponent,
    CatsTableComponent,
    BooksTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
