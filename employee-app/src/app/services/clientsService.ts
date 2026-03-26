import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'https://localhost:7217/api/Client';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  create(Client: any) {
    return this.http.post(this.apiUrl, Client);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
 update(client: any) {
  return this.http.put(`${this.apiUrl}/${client.id}`, client);
}

}