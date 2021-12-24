import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'express';
  public test: string = '';

  constructor(private httpClient: HttpClient) { }

  hacerTest() {
    this.httpClient.get('/api/test/').subscribe(
      (result: any) => {
        console.log(result);
        this.test = result.mensaje;
      },
      (err) => {this.test = 'Ha ocurrido un error en la petición del test'}
  )}

  getUsers() {
    this.httpClient.get('/api/test/users').subscribe(
      (result: any) => {
        console.log(result);
      },
      (err) => {console.log(err)}
  )}

}
