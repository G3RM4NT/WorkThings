import { Component, signal } from '@angular/core';
import { EmployeesComponent } from './employees/employees';
import { ClientsComponent } from './Clients/ClientsComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeesComponent, ClientsComponent],
  template: `
    <app-employees></app-employees>
    <app-clients></app-clients> 
  `
})
export class AppComponent {
  title = signal('employee-app');
}