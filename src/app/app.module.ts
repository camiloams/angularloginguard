import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataServices } from './mocks/in-memory-data-services';
import { HomeComponent } from './modules/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServices),
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
