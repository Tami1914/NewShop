import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  endpoint = 'http://localhost:8080/api/coffee';

  constructor(private httpClient: HttpClient) { }

  getCoffees() {
    return this.httpClient.get(this.endpoint);
  }

  create(coffee: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("country", coffee.country);
    body.append("flavor", coffee.flavor);

    return this.httpClient.post(this.endpoint, body.toString(), { headers });
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}