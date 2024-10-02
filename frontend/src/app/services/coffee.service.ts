import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  endpoint = 'http://localhost:8080/api/coffee';

  constructor(private httpClient: HttpClient) { }

  getCoffees(){
    return this.httpClient.get(this.endpoint);
  }
}