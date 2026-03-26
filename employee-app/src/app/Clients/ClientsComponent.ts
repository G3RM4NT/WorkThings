import { Component, OnInit } from '@angular/core';
import { ClientService} from '../services/clientsService';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './Clients.Component.html'
})
export class ClientsComponent implements OnInit {

  clients: any[] = [];
  newclients = {id: 0, name: '', email: '', apellido:'', edad: 0};

  constructor(private ClientService: ClientService) {}

  ngOnInit() {
    this.getclients();
  }

  getclients() {
    this.ClientService.getAll().subscribe((data: any) => {
      this.clients = data;
    });
  }

  addclients() {
    this.ClientService.create(this.newclients).subscribe(() => {
      this.getclients();
      this.newclients = {id: 0, name: '', email: '', apellido:'', edad: 0};
    });
  }

  deleteclients(id: number) {
    this.ClientService.delete(id).subscribe(() => {
      this.getclients();
    });
  }

  updateclients(cli: any) {
    this.newclients = { ...cli };
  }

  guardarUpdate() {
    this.ClientService.update(this.newclients.id).subscribe(() => {
      this.getclients();
      this.newclients = {id: 0, name: '', email: '', apellido:'', edad: 0};
    });
  }
}